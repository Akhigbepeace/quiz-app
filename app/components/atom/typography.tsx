import clsx from "clsx";
import React, { ReactNode } from "react";

const typographyVariants = {
  h1: "text-[40px]",
  h2: "text-[32px]",
  h3: "text-[24px]",
  h4: "text-[18px]",
  p: "text-[16px]",
};

const textWeights = {
  extraBold: "font-[700]",
  bold: "font-[600]",
  regular: "font-[500]",
  light: "font-[400]",
};

const textColorVariants = {
  white: "text-[#FFF]",
  black: "text-[#000]",
  primaryColor: "text-primaryColor",
  secondaryColor: "text-secondaryColor",
  tertiary: "text-tertiaryColor",
};

const opacityVariants = {
  sm: "",
  md: "opacity-50",
  lg: "opacity-60",
  xl: "opacity-70",
  none: "opacity-100",
};

type TypographyVariants = keyof typeof typographyVariants;
type TextColorVariants = keyof typeof textColorVariants;
type Opacity = keyof typeof opacityVariants;
type TextWeights = keyof typeof textWeights;

type TypographyProps = {
  opacity?: Opacity;
  variant: TypographyVariants;
  weight: TextWeights;
  children: string | number | ReactNode;
  color: TextColorVariants;
  htmlTag?: TypographyVariants | "span" | "div";
  spacing?: string;
};

const Typography = (props: TypographyProps) => {
  const {
    children,
    variant,
    htmlTag,
    spacing,
    weight,
    opacity = "none",
    color,
  } = props;
  const Component = htmlTag || variant;
  const typographyClx = typographyVariants[variant];
  const textColorClx = textColorVariants[color];
  const fontWeight = textWeights[weight];
  const textOpacity = opacity && opacityVariants[opacity];

  return (
    <Component
      className={clsx(
        typographyClx,
        textColorClx,
        spacing,
        fontWeight,
        textOpacity
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;
