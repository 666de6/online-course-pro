import { Meta, StoryObj } from "@storybook/react";
import CourseCard from "./index";
import { userEvent, waitFor, within, expect} from '@storybook/test';


const meta: Meta<typeof CourseCard> = {
  title: 'Components/CourseCard',
  component: CourseCard,
  tags: ['autodocs'],
  argTypes: {
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicCourseCard: Story = {
  args: {
    title: 'Learning English one on one',
    price: 50,
    mainImg: 'images/img_image_2.png'
  }
}

export const hoverShopButton: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const buttonImg = canvas.getByTestId('shop-button');
    await step('Mouse Enter', async () => {
      await userEvent.hover(buttonImg);
    });
    await waitFor(() => expect(buttonImg.getAttribute('src')).toBe('images/img_shopping_bag_24_white_a700.svg'));
    
    await step('Mouse Leave', async () => {
      await userEvent.unhover(buttonImg);
    });
    // 👇 Now we can assert that 
    await waitFor(() => expect(buttonImg.getAttribute('src')).toBe('images/img_shopping_bag_24.svg'));
  },
}