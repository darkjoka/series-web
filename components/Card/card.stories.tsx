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
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis deleniti laborum dolor recusandae? Omnis, numquam sed? Ea suscipit voluptates molestias repellat vitae consectetur acere labore in, nam dignissimos magnam ipsam ipsa quia asperiores, molestiae nostrum sed! Totam, accusantium doloremque.',
  title:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,quam!',
};

export const NoTeaser = Template.bind({});
NoTeaser.args = {
  imageSrc: '/cardImage.png',
  permalink: '',
  rating: '3.45343',
  teaser: '',
  title:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,quam!',
};
