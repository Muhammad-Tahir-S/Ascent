import type { Metadata } from "next";
import "./globals.css";

import clsx from "clsx";
import { baumans } from "./fonts";

import RankBanner from "./components/rank-banner";
import Header from "./components/header";

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
      <body className={clsx(baumans.className, "relative flex flex-col")}>
        <Header />
        <RankBanner />
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
