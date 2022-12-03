import React from 'react';

import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title as StoryTitle,
} from '@storybook/addon-docs';
import { Meta, Story } from '@storybook/react';
import InboxIcon from '@mui/icons-material/Inbox';
import HomeIcon from '@mui/icons-material/Home';

import { Sidebar, sidebarProps } from './Sidebar';
import { SidebarContent } from './SidebarContent';
import { SidebarContainer } from './SidebarContainer';

import { MenuItem, MenuHeader } from '../../components/MenuItem';

export const Template: Story<sidebarProps> = (args) => (
  <SidebarContainer>
    <Sidebar {...args} />
    <SidebarContent>
      <div style={{ backgroundColor: 'lightBlue', height: "100%"}}>Main Content</div>
    </SidebarContent>
  </SidebarContainer>
);

const Page = () => (
  <React.Fragment>
    <StoryTitle />
    <Subtitle />
    <Description>
      Sidebar is the sidebar layout
    </Description>
    <Primary />
    <ArgsTable story={PRIMARY_STORY} />
    <Stories />
  </React.Fragment>
);

const icon = <InboxIcon></InboxIcon>;

const menuItems = (
  <div>
    <MenuHeader label="Menu Header that is long" icon={<HomeIcon></HomeIcon>} link="/"></MenuHeader>
    <MenuItem label="Menu Item 1" icon={icon} link="/"></MenuItem>
    <MenuItem label="Menu Item 2" icon={icon} link="/"></MenuItem>
    <MenuItem label="Menu Item 3 that is long" icon={icon} link="/"></MenuItem>
  </div>
)


export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
  args: {
    children: menuItems,
  },
  parameters: {
    docs: {
      page: Page,
    },
  },
} as Meta;
