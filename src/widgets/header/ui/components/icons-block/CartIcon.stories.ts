import type { Meta, StoryObj } from '@storybook/react';

import { UiCartIcon } from './CartIcon';

const meta: Meta<typeof UiCartIcon> = {
  component: UiCartIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UiCartIcon>;

export const CartIcon: Story = {
  args: {},
};
