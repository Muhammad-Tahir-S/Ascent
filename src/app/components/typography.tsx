import clsx from "clsx";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

type Variant =
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "H6"
  | "subtitle"
  | "body"
  | "caption-sm"
  | "caption-lg";

type Color =
  | "primary"
  | "primary-highlight"
  | "secondary"
  | "secondary-highlight";

export default function Typography({
  variant,
  className,
  children,
  textColor,
  ...rest
}: {
  variant: Variant;
  textColor?: Color;
} & DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) {
  return (
    <p
      {...rest}
      className={clsx(
        fontStylesMap[variant],
        textColor ? colorsStylesMap[textColor] : null,
        className
      )}
    >
      {children}
    </p>
  );
}

const fontStylesMap: Record<Variant, string> = {
  H1: "text-[48px] leading-[64px]",
  H2: "text-[42px] leading-[56px]",
  H3: "text-[30px] leading-[40px]",
  H4: "text-[24px] leading-[32px]",
  H5: "text-[20px] leading-[32px]",
  H6: "text-[18px] leading-[24px]",
  subtitle: "text-[16px] leading-[24px]",
  body: "text-[14px] leading-[24px]",
  "caption-sm": "text-[12px] leading-[16px]",
  "caption-lg": "text-[11px] leading-[16px]",
};

const colorsStylesMap: Record<Color, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  "primary-highlight": "text-primary-hl",
  "secondary-highlight": "text-secondary-hl",
};
