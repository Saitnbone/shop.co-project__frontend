import { Meta, StoryObj } from '@storybook/react';
import { LogoUI } from './LogoUI';

export default {
  name: 'Ui/Logo',
  component: LogoUI,
} as Meta;

type story = StoryObj< typeof LogoUI>

const Template: StoryObj = () => <LogoUI />;

export const Default = Template.bind({});
Default.args = {};