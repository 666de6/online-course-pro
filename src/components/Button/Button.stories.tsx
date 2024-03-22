import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, Img } from "../../components";

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {},
  argTypes: {

  }  
}

export default meta;

type Story = StoryObj<typeof meta>;

export const CircleWithImg: Story = {
  args: {
    children: <Img src="images/img_call_button.svg"/>,
    shape: 'circle',
    size: '4xl',
    className: 'w-[60px]'
  }
}