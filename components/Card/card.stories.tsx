import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import Card from '.';

export default {
  title: 'Component/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: '/cardImage.png',
  permalink: '',
  rating: '3.45343',
  teaser:
    'Set in a dystopian universe where food is scarce, a boy and his step mom must survive the perils of living life with no tunnels for hope',
  title: 'Some Amazing Movie',
};

export const NoTeaser = Template.bind({});
NoTeaser.args = {
  imageSrc: '/cardImage.png',
  permalink: '',
  rating: '3.45343',
  teaser: '',
  title: 'Some Amazing Movie',
};
