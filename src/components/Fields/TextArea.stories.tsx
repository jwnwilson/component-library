import React from 'react';

import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { TextArea, TextAreaProps } from './TextArea';

export default {
    title: 'Components/TextArea',
    component: TextArea,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
  } as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'outlined',
  label: 'text field',
  value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  rows: 3
};

