"use client";

import Link from "next/link";
import { ComponentProps } from "react";

import SpriteIcon from "../sprite-icon";
import SidebarItem from "./sidebar-item";
import Typography from "../typography";

export default function Sidebar() {
  return (
    <div className="min-w-[280px] max-w-[280px] px-[32px] py-5 flex flex-col bg-secondary-hl filter brightness-[105%] shadow-secondary-hl shadow-lg">
      <Link href="/" className="flex items-center gap-2 mb-10">
        <SpriteIcon
          id="logo"
          props={{
            width: 36,
            height: 36,
            className: "fill-secondary",
          }}
        />

        <Typography variant="H3" className="font-medium" textColor="secondary">
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
        className: isActive ? "stroke-secondary-hl" : "stroke-secondary",
      },
    }),
  },
  {
    title: "Leaderboards",
    href: "/leaderboards",
    iconProps: (isActive: boolean) => ({
      id: "rank",
      props: { className: isActive ? "fill-secondary-hl" : "fill-secondary" },
    }),
  },
  {
    title: "Settings",
    href: "/settings",
    iconProps: (isActive: boolean) => ({
      id: "cog",
      props: {
        className: isActive ? "stroke-secondary-hl" : "stroke-secondary",
      },
    }),
  },
];
