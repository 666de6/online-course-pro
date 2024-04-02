import { Meta, StoryObj } from "@storybook/react";
import HeaderComp from "./index";

const meta: Meta<typeof HeaderComp> = {
  component: HeaderComp,
  parameters: {
    layout: 'fullscreen'
  },

}

export default meta;

type Story = StoryObj<typeof meta>;

export const MyHeader: Story = {
  args:{
  }
}
