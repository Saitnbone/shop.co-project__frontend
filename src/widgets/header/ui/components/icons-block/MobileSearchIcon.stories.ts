import type { Meta, StoryObj } from '@storybook/react';

import {  UiMobileSearchIcon } from './MobileSearchIcon';

const meta: Meta<typeof  UiMobileSearchIcon> = {
  component:  UiMobileSearchIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof  UiMobileSearchIcon>;

export const MobileSearchIcon: Story = {
  args: {},
};
