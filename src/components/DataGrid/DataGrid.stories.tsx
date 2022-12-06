import React from 'react';

import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { DataGrid, DataGridProps } from './DataGrid';

export default {
    title: 'Components/DataGrid',
    component: DataGrid,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
  } as ComponentMeta<typeof DataGrid>;

const Template: ComponentStory<typeof DataGrid> = (args) => <DataGrid {...args} />;

export const Primary = Template.bind({});
const columnData = [
  { 
    field: "id", 
    headerName: "ID"
  },
  { 
    field: "name", 
    headerName: "Name"
  },
]
const tableData = [
  {
    id: 1,
    name: "test 1"
  },
  {
    id: 2,
    name: "test 2"
  },
  {
    id: 3,
    name: "test 3"
  }
]

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  columnData: columnData,
  tableData: tableData
};