import {Meta, StoryObj} from "@storybook/react";
import { SelectBox } from ".";
import React from "react";

const meta: Meta<typeof SelectBox> = {
  component: SelectBox,
  args: {
    variant: 'fill',
    shape: 'round'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'xs']
    },
    isMulti: {
      control: 'boolean'
    },
    isSearchable: {
      control: 'boolean'
    }
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicSelectBox: Story = {
  args: {
    className: 'bg-red-50',
    options: [
      {
        label: 'Osaka',
        value: 'osaka'
      },
      {
        label: 'Kyoto',
        value: 'kyoto'
      }
    ]
  }
}
export const SeachableSelectBox: Story = {
  args: {
    ...BasicSelectBox.args,
    isSearchable: true,
    indicator: <span>🤙</span>
  }
}
export const MultiSelectBox: Story = {
  args: {
    ...BasicSelectBox.args,
    isMulti: true
  }
}


