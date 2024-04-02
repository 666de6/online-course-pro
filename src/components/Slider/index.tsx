import React from "react";
import AliceCarousel, { Props } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type SliderComponentProps = Props &
  Partial<{
    items: React.ReactElement[];
    centerMode: string | boolean;
    magnifiedIndex?: number;
    activeSlideCSS?: string;
    activeIndex: number,
    [x: string]: any;
  }>;

const Slider = React.forwardRef<AliceCarousel, SliderComponentProps>(
  ({ items = [], centerMode, activeSlideCSS, ...props }, ref) => {
    const slideItems = centerMode
      ? items?.map((child, index) => {  
          const test = React.cloneElement(child, {
            ...child.props,
            className: [child.props?.className, activeSlideCSS].filter(Boolean).join(" "),
          });
          return test;
        })
      : items;

    return (
      <AliceCarousel
        items={slideItems}
        infinite
        ref={ref}
        {...props}
        touchTracking
        mouseTracking
        disableButtonsControls
      />
    );
  },
);
export { Slider };
