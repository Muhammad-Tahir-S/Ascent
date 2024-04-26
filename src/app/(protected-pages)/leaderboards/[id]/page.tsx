import { baumans } from "@/app/fonts";
import clsx from "clsx";
import React from "react";

export default function LeaderBoard() {
  return (
    <div>
      {" "}
      <div className={clsx(baumans.className, "text-yellow-300")}>
        Leaderboard single
      </div>
    </div>
  );
}
