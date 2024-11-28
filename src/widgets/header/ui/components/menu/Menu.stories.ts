import type { Meta, StoryObj } from '@storybook/react';
// import { ReactNode } from 'react';


import { UiMenu } from './Menu';

// type TUiMenuProps = {
//     dropDown: ReactNode;
//   };

const meta:  Meta<typeof UiMenu> = {
    component: UiMenu
}

export default meta; 
type Story = StoryObj<typeof UiMenu>

export const Menu: Story = { 
    args: {},
}