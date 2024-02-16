import clsx from "clsx";
import React from "react";
import { baumans } from "../fonts";

export default function Leaderboards() {
  return (
    <div>
      <div className={clsx(baumans.className, "text-yellow-300")}>
        Leaderboards
      </div>
    </div>
  );
}
