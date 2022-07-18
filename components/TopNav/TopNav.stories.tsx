import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {TopNav} from '.';

export default {
  title: 'Component/TopNav',
  component: TopNav,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TopNav>;

const Template: ComponentStory<typeof TopNav> = args => <TopNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  handler: () => null,
  themeHandlerLight: () => null,
  themeHandlerDark: () => null,
};
