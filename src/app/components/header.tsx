"use client";
import clsx from "clsx";
import { Flame } from "lucide-react";
import useSound from "use-sound";
import { rubikGemstones } from "../fonts";
import Link from "next/link";
// import Image from "next/image";

export default function Header() {
  const [playHoverPulse] = useSound("/hover-pulse.mp4", {
    playbackRate: 1.2,
    interrupt: true,
    volume: 0.3,
  });
  return (
    <div className="h-[60] px-[32px] py-5 flex gap-4">
      <Link href="/">
        <Flame className="stroke-primary-100" />
        {/* <Image alt="logo" src="/logo.png" width={48} height={48} /> */}
      </Link>
      <Link onMouseOver={() => playHoverPulse()} href="/leaderboards">
        <p
          className={clsx(
            "text-primary-100 text-[20px] drop-shadow-glow-bg hover:drop-shadow-glow-primary transition-all duration-500",
            rubikGemstones.className
          )}
        >
          LEADERBOARDS
        </p>
      </Link>
    </div>
  );
}
