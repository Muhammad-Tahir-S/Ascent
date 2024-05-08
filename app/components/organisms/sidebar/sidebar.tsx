"use client";

import Link from "next/link";
import { ComponentProps } from "react";

import SpriteIcon from "../../atoms/sprite-icon";
import SidebarItem from "./sidebar-item";
import Typography from "../../atoms/typography";

export default function Sidebar() {
  return (
    <div className="py-5 flex flex-col bg-yellow shadow-yellow shadow-lg transition-[padding,width] duration-500 hover:w-[240px] w-[48px] hover:px-[18px] px-[4px] group/sidebar-con items-center hover:items-start overflow-x-hidden">
      <Link
        href="/"
        className="flex items-center justify-center group-hover/sidebar-con:justify-start group-hover/sidebar-con:gap-2 gap-0 mb-10 h-[40px]"
      >
        <SpriteIcon
          id="logo"
          props={{
            width: 36,
            height: 36,
            className: "fill-wine",
          }}
        />

        <Typography
          variant="H3"
          className="font-medium hidden group-hover/sidebar-con:block"
          textColor="wine"
        >
          Ascent
        </Typography>
      </Link>

      <div className="flex flex-col gap-2 group-hover/sidebar-con:items-start items-center ease-in-out">
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
