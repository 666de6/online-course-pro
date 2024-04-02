import React, { Fragment } from "react";
import { StoryObj, Meta } from "@storybook/react";
import { Slider } from './index';
import { Img, Heading } from '../index';

const meta: Meta<typeof Slider> = {
  component: Slider,
  args: {
    items: [
      <div key="1">Item 1</div>,
      <div key="2">Item 2</div>,
      <div key="3">Item 3</div>,
    ],
    activeSlideCSS: '',
    centerMode: true,
    activeIndex: 2,
    magnifiedIndex: 2
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

const intro = [
  'Welcome to',
  'Educatsy Online',
  'Learning Platform'
]

export const BasicSlider: Story = {
  args: {
    activeSlideCSS: 'text-blue-500 bg-orange-500'
  }
}

export const SignUpSlider: Story = {
  args: {
    items: intro.map((child, index) => (
      <div className="flex justify-center" key={index}>
        <div className="">
          <Img src="images/img_logo.svg" alt="logo_one" className="h-[20px]" />
          <Heading size="2xl" as="h1" className="mx-2.5 my-4 text-gray-700_01 font-sans text-3xl">
            {child}
          </Heading>
          <Img src="images/img_5790719_1.svg" alt="welcome"/>
        </div>
      </div>
    )),
    activeSlideCSS: 'scale-75'
  }
}