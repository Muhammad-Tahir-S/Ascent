import type { Metadata } from "next";
import clsx from "clsx";

import { baumans } from "./fonts";
import "./globals.css";
import RankBanner from "./components/rank-banner";
import Sidebar from "./components/sidebar";

export const metadata: Metadata = {
  title: "Ascent",
  description: "Leaderboard app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(baumans.className, "relative flex bg-[#FCFCFC]")}>
        {children}
      </body>
    </html>
  );
}
