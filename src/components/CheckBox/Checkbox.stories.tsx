import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "../../components";
import { fn } from '@storybook/test';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof CheckBox> = {
  title: 'Components/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  args: {
    name: 'checkbox',
    shape: 'square',
    size: 'xs',
    onChange: fn()
  },
  argTypes: {
    className: {
      control: 'text'
    }
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'checkbox 1',
    id: 'checkbox_id_1',
    onChange: (val) => {
      console.log(`checked: ${val}`);
    }
  }
}
export const CheckboxWithChildren: Story = {
  args: {
    ...Basic.args,
    checked: true
  },
  render: (args) => {
    const [isChecked, setChecked] = useState(false);
    const [child, setChild] = useState(null);

    function handleChange(){
      if(!isChecked){
        setChecked(true);
        setChild(() => <div>Show Child</div>);
      }else{
        setChecked(false);
        setChild(null);
      }
    }
    return (
      <CheckBox {...args} children={child} checked={isChecked} onChange={handleChange}/>
    )
  }
}