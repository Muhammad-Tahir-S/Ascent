"use client";
import { clsx } from "clsx";
import { forwardRef, useState } from "react";
import Typography from "../atoms/typography";

import { Eye, EyeOff } from "lucide-react";
import { usePlaySound } from "../../hooks/usePlaySound";

type CustomInputProps = {
  errorText?: string;
  label?: string;
  hideable?: boolean;
  variant?: "default" | "olive";
};
interface InputProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    CustomInputProps {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      id,
      name,
      errorText,
      hideable,
      type,
      variant = "default",
      onKeyDown,
      ...restInputProps
    },
    ref
  ) => {
    const inputId = id || name;

    const [isHidden, setHidden] = useState(true);

    const VisibilityIcon = isHidden ? Eye : EyeOff;

    const [playActive] = usePlaySound({
      src: "/keyboard-click.mp3",
      options: {
        volume: 0.65,
        playbackRate: 1,
        interrupt: true,
      },
    });

    return (
      <div className={clsx("group flex flex-col", className)}>
        <div className="relative w-full ">
          <input
            id={inputId}
            aria-invalid={!!errorText}
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            name={name}
            onKeyDown={(e) => {
              setTimeout(() => playActive(), 200);
              onKeyDown?.(e);
            }}
            onWheel={(e) => {
              if (type === "number") {
                onNumberInputWheelChange(e);
              }
              restInputProps?.onWheel?.(e);
            }}
            className={clsx(
              "peer order-2 px-2 py-[6px] w-full block max-h-[36px] border  rounded  peer  text-[14px] leading-[24px]  focus:outline-none disabled:bg-bg-100  disabled:cursor-default transition-colors duration-300 relative",
              errorText
                ? "text-red-500 border-red-500"
                : "text-navy focus:text-blue-800 disabled:placeholder:text-gray-100 placeholder:text-gray-200 border-blue-yinMin focus:border-blue-800 group-hover:border-blue-800 disabled:border-gray-50",
              variant === "olive" ? "bg-light-olive" : "bg-white"
            )}
            type={isHidden && hideable ? "password" : type}
            {...restInputProps}
          />

          {/* label is placed below the input so tailwind's 'peer' can work */}

          {label && (
            <label
              className={clsx(
                "absolute left-0 top-0 -mt-[18px] block w-full   transition-colors duration-300",
                errorText
                  ? "text-red-500"
                  : "peer-focus:text-blue-800 text-navy"
              )}
              htmlFor={inputId}
            >
              <Typography variant="caption-lg" className="text-inherit">
                {label}
              </Typography>
            </label>
          )}

          {hideable && (
            <VisibilityIcon
              className="cursor-pointer w-4 h-4 absolute right-2 top-[50%] -translate-y-1/2 stroke-navy peer-focus:stroke-blue-800 hover:stroke-blue-800"
              onClick={() => {
                playActive();
                setHidden((prev) => !prev);
              }}
            />
          )}
        </div>

        {errorText && (
          <Typography
            variant="caption-lg"
            className="text-red-500  transition-colors duration-300"
          >
            {errorText}
          </Typography>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

function onNumberInputWheelChange(e: React.WheelEvent<HTMLInputElement>) {
  const inputEl = e.target as HTMLInputElement;
  inputEl.blur();
  e.stopPropagation();
  setTimeout(() => {
    inputEl.focus();
  }, 0);
}
