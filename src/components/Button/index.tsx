import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[5px]",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-900",
    orange_200_01: "bg-orange-200_01 text-white-A700",
    deep_orange_400: "bg-deep_orange-400",
    red_50: "bg-red-50",
    red_300_01: "bg-red-300_01 text-white-A700",
  },
  outline: {
    red_300_01: "border-red-300_01 border border-solid text-red-300_01",
  },
} as const;
const sizes = {
  "4xl": "h-[60px] px-[22px]",
  sm: "h-[40px] px-[15px] text-lg",
  "2xl": "h-[54px] px-[35px] text-lg",
  "3xl": "h-[59px] px-[30px] text-base",
  xs: "h-[36px] px-[9px]",
  md: "h-[43px] px-[30px] text-base",
  lg: "h-[44px] px-2.5",
  xl: "h-[51px] px-[35px] text-base",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xl",
  color = "red_300_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
