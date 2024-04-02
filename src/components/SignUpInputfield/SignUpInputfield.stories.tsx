import {Meta, StoryObj} from '@storybook/react';
import SignupInput from './index';

const meta: Meta<typeof SignupInput> = {
  component: SignupInput,
  parameters: {
    // layout: 'full-screen'
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const SignUpInputExample: Story = {
  args: {
    className: 'flex flex-col items-start justify-start mt-5 pt-[5px] gap-[9px]',
  }
}