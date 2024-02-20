import Link from "next/link";
import { ComponentProps } from "react";

import SpriteIcon from "../sprite-icon";
import SidebarItem from "./sidebar-item";
import Typography from "../typography";

export default function Sidebar() {
  return (
    <div className="min-w-[280px] max-w-[280px] px-[32px] py-5 flex flex-col bg-primary shadow-primary shadow-xl">
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
    iconProps: {
      id: "home",
      props: { className: "w-6 h-6 stroke-secondary" },
    },
  },
  {
    title: "Leaderboards",
    href: "/leaderboards",
    iconProps: {
      id: "rank",
      props: { className: "w-6 h-6 fill-secondary" },
    },
  },
  {
    title: "Settings",
    href: "/settings",
    iconProps: {
      id: "cog",
      props: { className: "w-6 h-6 stroke-secondary" },
    },
  },
];
