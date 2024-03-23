import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, Img } from "../../components";
import { fn } from '@storybook/test';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: fn()
  },
  argTypes: {
    className: {
      control: 'text'
    },
    shape: {
      control: 'radio',
      options: ['circle', 'round']
    },
    variant: {
      control: 'radio',
      options: ['fill', 'outline'] 
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']
    },
    color: {
      control: 'select',
      options: [
        'white_A700',
        'orange_200_01',
        'deep_orange_400',
        'red_50',
        'red_300_01',
      ]
    }
  }
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  args: {
    children: 'Button',
    shape: 'round',
    size: 'lg'
  }
}

export const ButtonWithImg: Story = {
  args: {
    shape: 'round',
    size: '4xl'
  },
  render: (args) =>(
      <Button {...args}>
        <Img src='images/img_call_button.svg' alt="icon-button"/>
      </Button>
    )
  
}

export const PlayButton: Story = {
  args: {
    ...ButtonWithImg.args,
    className: 'w-[60px]',
    shape: 'circle'
  },
  render: (args) =>(
    <Button {...args}>
      <Img src='images/img_call_button.svg' alt="play-button"/>
    </Button>
  ) 
}

export const ShopButton: Story = {
  args: {
    ...ButtonWithImg.args,
    className: 'w-[44px] !rounded-md',
    shape: 'round',
    size: 'lg'
  },
  render: (args) =>(
    <Button {...args}>
      <Img src='images/img_shopping_bag_24_white_a700.svg' alt="shop-button"/>
    </Button>
  )  
}