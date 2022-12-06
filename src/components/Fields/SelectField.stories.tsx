import React from 'react';

import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { SelectField, SelectFieldProps } from './SelectField';

export default {
    title: 'Components/SelectField',
    component: SelectField,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
  } as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args) => <SelectField {...args} />;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'outlined',
  label: 'text field',
  choices: [
    {
        name: "test 1",
        value: "test 1"
    },
    {
        name: "test 2",
        value: "test 2"
    },
    {
        name: "test 3",
        value: "test 3"
    },
  ]
};

