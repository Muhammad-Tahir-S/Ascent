import clsx from "clsx";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { rubikGemstones, rubik, rubikGlitch, baumans } from "../fonts";

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

type Color = "purple-pink" | "pink-red" | "wine" | "yellow";

export default function Typography({
  variant,
  className,
  children,
  textColor,
  fontFamily = "baumans",
  ...rest
}: {
  variant: Variant;
  textColor?: Color;
  fontFamily?: "rubikGemstones" | "rubikGlitch" | "baumans" | "rubik";
} & DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) {
  const fonts: { [k in NonNullable<typeof fontFamily>]: typeof rubik } = {
    rubik,
    rubikGemstones,
    rubikGlitch,
    baumans,
  };

  return (
    <p
      {...rest}
      className={clsx(
        fontStylesMap[variant],
        textColor ? colorsStylesMap[textColor] : null,
        fonts[fontFamily].className,
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
  "caption-lg": "text-[12px] leading-[16px]",
  "caption-sm": "text-[11px] leading-[16px]",
};

const colorsStylesMap: Record<Color, string> = {
  "purple-pink": "text-purple-pink",
  wine: "text-wine",
  "pink-red": "text-pink-red",
  yellow: "text-yellow",
};
