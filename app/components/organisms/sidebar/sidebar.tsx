"use client";

import Link from "next/link";
import { ComponentProps } from "react";

import SpriteIcon from "../../atoms/sprite-icon";
import SidebarItem from "./sidebar-item";
import Typography from "../../atoms/typography";

export default function Sidebar() {
  return (
    <div className="min-w-[280px] max-w-[280px] px-[32px] py-5 flex flex-col bg-yellow shadow-yellow shadow-lg">
      <Link href="/" className="flex items-center gap-2 mb-10">
        <SpriteIcon
          id="logo"
          props={{
            width: 36,
            height: 36,
            className: "fill-wine",
          }}
        />

        <Typography variant="H3" className="font-medium" textColor="wine">
          Ascent
        </Typography>
      </Link>

      <div className="flex flex-col gap-2">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

const sidebarItems: ComponentProps<typeof SidebarItem>[] = [
  {
    title: "Home",
    href: "/",
    iconProps: (isActive: boolean) => ({
      id: "home",
      props: {
        className: isActive ? "stroke-yellow" : "stroke-wine",
      },
    }),
  },
  {
    title: "Leaderboards",
    href: "/leaderboards",
    iconProps: (isActive: boolean) => ({
      id: "rank",
      props: { className: isActive ? "fill-yellow" : "fill-wine" },
    }),
  },
  {
    title: "Settings",
    href: "/settings",
    iconProps: (isActive: boolean) => ({
      id: "cog",
      props: {
        className: isActive ? "stroke-yellow" : "stroke-wine",
      },
    }),
  },
];
