import type { Meta, StoryObj } from '@storybook/react';

import { UiIconsBlock } from './IconsBlock';

const meta: Meta<typeof UiIconsBlock> = {
  component: UiIconsBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UiIconsBlock>;

export const Default: Story = {};