import { Meta, StoryObj } from "@storybook/react";
import { Img } from "../../components";

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicImg: Story = {
  args: {
    src: 'images/img_pexels_vanessa_garcia_6325959.png',
    alt: 'banner',
    width: 500
  }
}