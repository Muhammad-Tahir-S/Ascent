import clsx from "clsx";
import React from "react";
import { baumans } from "../fonts";

export default function Leaderboards() {
  return (
    <div>
      <div className={clsx(baumans.className, "text-yellow-300")}>
        Leaderboards
      </div>
      <div className="flex gap-4">
        {Array.from({ length: 4 }).map((n, i) => (
          <div
            key={i}
            className="box z-0 w-[170px] h-[270px] drop-shadow-glow-bg border border-blue-tiffany relative ml-10 bg-bg-50"
          >
            {[
              "left-[1.6px] top-[-2px] rotate-[32deg]",
              "right-[1.6px] top-[-2px] rotate-[-32deg]",
              "left-[1.6px] bottom-[-2px] rotate-[-32deg]",
              "right-[1.6px] bottom-[-2px] rotate-[32deg]",
            ].map((coords, i) => (
              <div
                key={i}
                className={clsx(
                  "absolute w-[1px] h-[calc(3%_+_2px)] drop-shadow-glow-bg bg-blue-tiffany z-10",
                  coords
                )}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="w-[100vw] flex justify-center">
        <div className="w-[270px] h-[270px] mt-5 relative after:absolute edge-clip after:mx-auto after:z-[10] after:w-full after:h-full  after:border after:border-bg-50 hover:after:border-primary-100  after:rounded-md card-gradient group transition-all hover:shadow-primary-100 hover:shadow-sm rounded-md">
          <div
            className={clsx(
              "absolute z-[10] top-0.5 rounded-tl-md left-0.5 w-[14%] h-[14%] bg-primary-100 border border-bg-100 group-hover:border-primary-100 group-hover:left-[0px] group-hover:top-[0px] group-hover:w-[calc(15%_+_2px)] group-hover:h-[calc(15%_+_2px)] opacity-80 group-hover:opacity-100"
            )}
          />
          <div
            className={clsx(
              "absolute w-[1px] h-[56px] drop-shadow-glow-bg bg-bg-50 group-hover:bg-primary-100 z-[11]",
              "left-[7.4%] top-[-8px] rotate-[45deg]"
            )}
          />
        </div>
      </div>
    </div>
  );
}

// after:absolute after:z-[10] after:inset-0 after:w-[13%] after:h-[13%] after:bg-blue-tiffany
