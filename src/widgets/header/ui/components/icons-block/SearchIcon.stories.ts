import type { Meta, StoryObj } from '@storybook/react';
import { UiSearchIcon } from './SearchIcon';

const meta: Meta<typeof UiSearchIcon> = {
  component: UiSearchIcon,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UiSearchIcon>;

export const Default: Story = {
  args: {},
};
