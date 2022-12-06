import React from 'react';

import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from './TextField';

export default {
    title: 'Components/TextField',
    component: TextField,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
  } as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'outlined',
  label: 'text field',
};

