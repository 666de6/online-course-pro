import { Meta, StoryObj } from "@storybook/react";
import { RatingBar } from ".";

const meta: Meta<typeof RatingBar> = {
  component: RatingBar,
  args: {
    starCount: 5
  },
  argTypes: {
    color: {
      control: 'color'
    },
    activeColor: {
      control: 'color'
    },
    isEditable: {
      control: 'boolean'
    }
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicRatingBar: Story = {
  args:{
    starCount: 5,
    value: 2
  }
}

export const EditRatingBar: Story = {
  args:{
    ...BasicRatingBar,
    isEditable: true
  }
}

