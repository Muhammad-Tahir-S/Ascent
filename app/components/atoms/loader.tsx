"use client";
import { CSSProperties } from "react";

export default function Loader({ width }: { width: number }) {
  return (
    <div className="relative w-fit h-fit">
      <div
        style={{ width: `${width}px` }}
        className="aspect-square rounded-full w-fit h-fit bg-wine border-yellow flex justify-center items-center animate-loading-orb-bounce loading-orb z-10 absolute top-[25%]"
      >
        <span className="shadow"></span>
      </div>
      <div
        className="loading-rings-anchor z-0"
        style={
          {
            "--count": 10,
            "--anchor-width": `${width}px`,
            width: `${width}px`,
            minWidth: `${width}px`,
            height: `${width}px`,
            minHeight: `${width}px`,
          } as CSSProperties
        }
      >
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="loading-ring"
            style={{ "--index": i + 1 } as CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}
