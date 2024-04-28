"use client";
import clsx from "clsx";
import React, { forwardRef, useState } from "react";
import { usePlaySound } from "../../hooks/usePlaySound";

type ButtonsProps = {
  size?: "sm" | "md" | "lg";
  width?: "full" | "fit" | number;
  soundType?: "next" | "back";
  variant?: "primary" | "wine" | "outline";
};

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    ButtonsProps {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = "md",
      width = "fit",
      onClick,
      soundType,
      className,
      variant = "primary",
    },
    ref
  ) => {
    const [clicked, setClicked] = useState(false);

    const [playActive] = usePlaySound({
      src: "/click.wav",
      options: {
        volume: 1,
        playbackRate: soundType === "next" ? 1 : 0.75,
        interrupt: true,
      },
    });

    if (clicked) {
      setTimeout(() => setClicked(false), 300);
    }

    return (
      <button
        onClick={(e) => {
          setClicked(true);
          if (!!soundType) {
            playActive();
          }
          onClick?.(e);
        }}
        ref={ref}
        style={{
          width:
            typeof width === "number"
              ? `${width}px`
              : width === "full"
              ? "100%"
              : "fit-content",
        }}
        className={clsx(
          "rounded-[8px] h-[36px] flex items-center justify-center relative shadow-sm transition-all group",
          sizeStylesMap[size],
          variantStylesMap[variant],
          clicked
            ? "translate-y-[1.5px] scale-[0.98] duration-200 opacity-85"
            : "duration-500",
          className
        )}
      >
        <span className="group-hover:scale-[1.03] transition-transform duration-200">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;

const variantStylesMap: { [k in NonNullable<ButtonProps["variant"]>]: string } =
  {
    primary:
      "shadow-purple-pink text-ghost-white/90 hover:text-white bg-pink-red",
    wine: "border border-blue-900 bg-yellow text-blue-900 hover:text-pink-red hover:border-pink-red hover:shadow-purple-pink",
    outline:
      "border border-blue-700 text-blue-700 hover:bg-blue-800 hover:text-blue-nyanza hover:border-blue-nyanza hover:shadow-blue-nyanza blur-1",
  };

const sizeStylesMap: { [k in NonNullable<ButtonProps["size"]>]: string } = {
  sm: "px-[6px]",
  md: "px-[10px]",
  lg: "px-[12px]",
};
