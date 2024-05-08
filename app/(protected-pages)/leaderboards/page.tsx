"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { baumans } from "../../fonts";
import Typography from "@/components/atoms/typography";

export default function Leaderboards() {
  const [selectedNumber, setSelectedNumber] = useState<number>();
  const [undisplayedNumbers, setUndisplayedNumbers] = useState([1, 2, 3, 4]);

  function onUndisplayedClicked(num: number) {
    setUndisplayedNumbers((prev) =>
      selectedNumber
        ? [...prev.filter((n) => n !== num), selectedNumber].sort(
            (a, b) => a - b
          )
        : prev.filter((n) => n !== num).sort((a, b) => a - b)
    );
    setSelectedNumber(num);
  }

  return (
    <div className="flex flex-col flex-1 gap-10">
      <div className="flex gap-6 items-center">
        {undisplayedNumbers.map((num, i) => (
          <div
            key={i}
            onClick={(e) => {
              if (!document.startViewTransition) {
                onUndisplayedClicked(num);
                return;
              } else {
                // browser supports view transition. Animate the transtion.
                e.preventDefault();
                document.startViewTransition(() => {
                  onUndisplayedClicked(num);
                });
              }
            }}
            className="w-[100px] aspect-square border border-pink-red rounded-md flex items-center justify-center"
          >
            <Typography variant="body">{num}</Typography>
          </div>
        ))}
      </div>

      <div className="w-[400px] aspect-square border border-blue-yinMin rounded-xl flex items-center justify-center">
        <Typography variant="H2"> {selectedNumber}</Typography>
      </div>
    </div>
  );
}

// after:absolute after:z-[10] after:inset-0 after:w-[13%] after:h-[13%] after:bg-blue-tiffany
