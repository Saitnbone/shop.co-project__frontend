import type { Meta, StoryObj } from '@storybook/react';

import { UiSearchInput } from './SearchInput';

const meta: Meta<typeof UiSearchInput> = {
  component: UiSearchInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UiSearchInput>;

export const SearchInput: Story = {
  args: {},
};
