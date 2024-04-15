"use client";
import { clsx } from "clsx";
import { forwardRef, useState } from "react";
import Typography from "./typography";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errorText?: string;
  label?: string;
  hideable?: boolean;
}

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
      ...restInputProps
    },
    ref
  ) => {
    const inputId = id || name;

    const [hideValue, setHideValue] = useState(true);

    return (
      <div className={clsx("group flex flex-col", className)}>
        <input
          id={inputId}
          aria-invalid={!!errorText}
          ref={ref as React.ForwardedRef<HTMLInputElement>}
          name={name}
          onWheel={(e) => {
            if (type === "number") {
              onNumberInputWheelChange(e);
            }
            restInputProps?.onWheel?.(e);
          }}
          className={clsx(
            "peer order-2 px-2 py-[6px] w-full block max-h-[36px] bg-white border  rounded cursor-pointer peer  text-[14px] leading-[24px]  focus:outline-none disabled:bg-bg-100  disabled:cursor-default transition-colors duration-300",
            errorText
              ? "text-red-500 border-red-500"
              : "text-gray-600 focus:text-blue-yinMin disabled:placeholder:text-gray-100 placeholder:text-gray-200 border-gray-400 focus:border-blue-uranian group-hover:border-blue-uranian disabled:border-gray-50"
          )}
          type={hideValue && hideable ? "password" : type}
          {...restInputProps}
        />

        {/* label is placed below the input so tailwind's 'peer' can work */}

        {label && (
          <label
            className={clsx(
              "mb-1 block w-full  order-1 transition-colors duration-300",
              errorText
                ? "text-red-500"
                : "group-hover:text-blue-yinMin peer-focus:text-blue-yinMin"
            )}
            htmlFor={inputId}
          >
            <Typography variant="caption-lg" className="text-inherit">
              {label}
            </Typography>
          </label>
        )}
        {errorText && (
          <Typography
            variant="caption-lg"
            className="text-red-500 order-3 transition-colors duration-300"
          >
            {errorText}
          </Typography>
        )}
        {/* {hideable && (
            <Icon
              className="cursor-pointer"
              onClick={() => setHideValue(!hideValue)}
              tag={hideValue ? EyeIcon : EyeSlashIcon}
              position={'end'}
            />
          )} */}
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
