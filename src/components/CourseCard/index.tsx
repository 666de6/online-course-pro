import React, { useState } from "react";
import { Button, Img, Heading, RatingBar } from "../index";

interface Props {
  className?: string;
  mainImg?: string;
  title?: string;
  price?: number;
}

export default function CourseCard({
  mainImg = "images/img_image_1.png",
  title = "The Three Musketeers",
  price = 40,
  className,
  ...props
}: Props) {
  const [hoverState, setHoverState] = useState(false);

  return (
    <div 
    className={`${className} flex flex-row justify-start w-full gap-6 p-[15px] bg-white-A700 shadow-xs cursor-pointer rounded-[10px] hover:shadow-xs`}
    {...props}>
      <div className="flex flex-row sm:flex-col justify-start items-center w-[89%] md:w-full gap-[15px] sm:gap-5">
        <div className="flex flex-row justify-start w-[31%] sm:w-full">
          <Img src={mainImg} alt="image_one" className="w-full md:h-auto sm:w-full object-cover rounded-[10px]" />
        </div>
        <div className="flex flex-col items-start justify-start w-[67%] sm:w-full gap-3">
          <Heading size="md" as="h1">
            {title}
          </Heading>
          <RatingBar
            value={5}
            isEditable={true}
            color="#ffc107"
            activeColor="#ffc107"
            size={20}
            className="flex justify-between"
          />
          <Heading size="md" as="h2" className="!text-deep_orange-400">
            ${Number(price).toFixed(2)}
          </Heading>
        </div>
      </div>
      <Button 
      color="red_50" size="lg" shape="round" 
      className="w-[44px] !rounded-md hover:bg-red-300_01"
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}>
        <Img data-testid='shop-button' src={hoverState ? 'images/img_shopping_bag_24_white_a700.svg' : 'images/img_shopping_bag_24.svg'} alt="shop-button"/>
      </Button>
    </div>
  );
}
