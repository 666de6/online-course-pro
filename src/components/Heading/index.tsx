import React from "react";

const sizes = {
  "3xl": "text-[45px] font-bold leading-[45px]",
  "2xl": "text-[40px] font-bold leading-[55px]",
  xl: "text-3xl font-semibold",
  s: "text-xl font-semibold",
  md: "text-[22px] font-semibold",
  xs: "text-lg font-semibold",
  lg: "text-[25px] font-semibold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
