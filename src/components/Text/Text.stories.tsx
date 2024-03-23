import { Meta, StoryObj } from "@storybook/react";
import { Text } from "..";

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'lg'
  },
  argTypes: {
    className: {
      control: 'text'
    },
    size: {
      control: 'inline-radio',
      options: ['xs','s','md','lg','xl',]
    }
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const PlainText: Story = {
  args: {
    children: 'hello world'
  }
}

export const HeadText: Story = {
  args: {
    children: 'h1 text',
    as: 'h1',
    size: 'lg'
  }
}