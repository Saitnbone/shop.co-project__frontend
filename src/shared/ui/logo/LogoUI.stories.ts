import type { Meta, StoryObj } from '@storybook/react';

import { LogoUI } from './LogoUI';

const meta: Meta<typeof LogoUI> = {
  component: LogoUI,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LogoUI>;

export const Logo: Story = {
  args: {},
};
