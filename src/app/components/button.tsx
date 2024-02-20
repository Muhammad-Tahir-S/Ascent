"use client";
import clsx from "clsx";
import React, { forwardRef } from "react";
import useSound from "use-sound";

type ButtonsProps = {
  size?: "sm" | "md" | "lg";
  width?: "full" | "fit" | number;
  soundType?: "next" | "back";
  variant?: "primary" | "secondary";
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
    const [playActive] = useSound("/click.wav", {
      volume: 1,
      playbackRate: soundType === "next" ? 1 : 0.75,
      interrupt: true,
    });

    return (
      <button
        onClick={(e) => {
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
          "rounded-[8px] h-[36px] flex items-center justify-center relative shadow-md transition-colors duration-500 group",
          sizeStylesMap[size],
          variantStylesMap[variant],
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
      "shadow-primary text-ghost-white/90 hover:text-white bg-primary-hl",
    secondary:
      "border border-secondary bg-secondary-hl text-secondary hover:text-primary-hl hover:border-primary-hl",
  };

const sizeStylesMap: { [k in NonNullable<ButtonProps["size"]>]: string } = {
  sm: "px-[6px]",
  md: "px-[10px]",
  lg: "px-[12px]",
};
