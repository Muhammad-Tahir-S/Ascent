"use client";

import { ComponentProps } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";
import useSound from "use-sound";
import Link from "next/link";

import { rubik, rubikGlitch } from "@/app/fonts";

import SpriteIcon from "../sprite-icon";

export default function SidebarItem({
  title,
  href,
  iconProps,
}: {
  title: string;
  href: string;
  iconProps: ComponentProps<typeof SpriteIcon>;
}) {
  const pathname = usePathname();
  const [playHoverPulse] = useSound("/hover-pulse.mp4", {
    playbackRate: 1.2,
    interrupt: true,
    volume: 0.3,
  });

  const isActive = href === pathname;

  return (
    <Link
      onClick={() => playHoverPulse()}
      href={href}
      className="px-2 flex items-center gap-2 relative h-[30px]"
    >
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-[2px] h-full absolute bg-prim-highlight left-[-32px]"
        />
      )}

      <div
        className={clsx("p-1", {
          "rounded-md transition-colors duration-500 bg-highlight": isActive,
        })}
      >
        <SpriteIcon {...iconProps} />
      </div>

      <p
        className={clsx(
          "leading-snug font-light transition-colors duration-500",
          isActive ? rubikGlitch.className : rubik.className,
          isActive
            ? "font-normal text-prim-highlight text-[20px]"
            : "text-secondary text-[18px] hover:scale-[1.05] transition-transform"
        )}
      >
        {title}
      </p>
    </Link>
  );
}
