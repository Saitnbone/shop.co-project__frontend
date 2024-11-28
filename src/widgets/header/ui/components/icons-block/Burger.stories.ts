import type { Meta, StoryObj } from '@storybook/react';

import { UiBurgerIcon } from './BurgerIcon';

const meta: Meta<typeof UiBurgerIcon> = {
  component: UiBurgerIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UiBurgerIcon>;

export const BurgerIcon: Story = {
  args: {},
};
