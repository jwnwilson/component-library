import React from 'react';
import InboxIcon from '@mui/icons-material/Inbox';

import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      color: {
        subcategory: 'Mui color values',
        options: ['primary', 'secondary'],
        control: { type: 'radio' },
      },
    },
  } as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const icon = <InboxIcon></InboxIcon>;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'primary',
  label: 'Button',
  icon: icon
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
    label: 'Button',
    icon: icon
};
