"use client";
import clsx from "clsx";
import React, { forwardRef } from "react";
import useSound from "use-sound";

type ButtonsProps = {
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  soundType?: "next" | "back";
};

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    ButtonsProps {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size = "md", fullWidth, onClick, soundType }, ref) => {
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
        className={clsx(
          "rounded-[8px] border-[2px] text-white relative bg-black ",
          size === "sm" ? "h-[24px]" : size === "md" ? "h-[36px]" : "h-[48px]",
          fullWidth ? "w-full" : "w-fit"
        )}
      >
        <span>
          <span className="w-full h-full absolute rounded-[8px] inset-0 container">
            <span className="primary"></span>
            <span className="complimentary"></span>
          </span>
        </span>
        <span> {children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
