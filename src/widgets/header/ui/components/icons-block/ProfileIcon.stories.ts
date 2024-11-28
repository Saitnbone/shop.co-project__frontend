import type { Meta, StoryObj } from '@storybook/react';

import { UiProfileIcon } from './ProfileIcon';

const meta: Meta<typeof UiProfileIcon> = {
  component: UiProfileIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UiProfileIcon>;

export const ProfileIcon: Story = {
  args: {},
};
