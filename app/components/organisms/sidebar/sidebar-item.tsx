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
      className="px-2 flex items-center gap-2 relative h-[30px]"
    >
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.4 }}
          transition={{ duration: 0.5 }}
          className="w-[2px] h-full absolute bg-pink-red left-[-32px]"
        />
      )}

      <div
        className={clsx("p-1", {
          "rounded-md transition-colors duration-500 bg-pink-red": isActive,
        })}
      >
        <SpriteIcon id={id} props={{ width: 24, height: 24, ...props }} />
      </div>

      <p
        className={clsx(
          "leading-snug font-normal transition-colors duration-500",
          isActive ? rubikGlitch.className : rubikGemstones.className,
          isActive
            ? "font-normal text-pink-red text-[20px]"
            : "text-wine text-[18px] hover:scale-[1.05] transition-transform"
        )}
      >
        {title}
      </p>
    </Link>
  );
}
