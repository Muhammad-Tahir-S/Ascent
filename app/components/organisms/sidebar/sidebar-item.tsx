"use client";

import { ComponentProps } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

import { rubikGemstones, rubikGlitch } from "@/fonts";

import SpriteIcon from "../../atoms/sprite-icon";
import { usePlaySound } from "@/hooks/usePlaySound";

export default function SidebarItem({
  title,
  href,
  iconProps,
}: {
  title: string;
  href: string;
  iconProps: (isActive: boolean) => ComponentProps<typeof SpriteIcon>;
}) {
  const pathname = usePathname();
  const [playHoverPulse] = usePlaySound({
    src: "/hover-pulse.mp4",
    options: {
      playbackRate: 1.2,
      interrupt: true,
      volume: 0.3,
    },
  });

  const isActive = href === pathname;

  const { id, props } = iconProps(isActive);

  return (
    <Link
      onClick={() => playHoverPulse()}
      href={href}
      className="flex items-center group/sidebar-item group-hover/sidebar-con:gap-2 gap-0 relative"
    >
      {isActive ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.4 }}
          transition={{ duration: 0.5 }}
          className="w-[2px] h-full absolute bg-pink-red left-[-18px] group-hover/sidebar-con:block hidden"
        />
      ) : null}

      <div
        className={clsx(
          "h-[32px] aspect-square p-1 flex items-center justify-center group-hover/sidebar-con:flex-1 transition-colors duration-500",
          {
            "rounded-md bg-pink-red": isActive,
          }
        )}
      >
        <SpriteIcon id={id} props={{ width: 24, height: 24, ...props }} />
      </div>

      <p
        className={clsx(
          "leading-snug font-normal duration-500 group-hover/sidebar-con:block hidden transition-all",
          isActive ? rubikGlitch.className : rubikGemstones.className,
          isActive
            ? "font-normal text-pink-red text-[20px]"
            : "text-wine text-[18px] group-hover/sidebar-item:scale-[1.05]"
        )}
      >
        {title}
      </p>
    </Link>
  );
}
