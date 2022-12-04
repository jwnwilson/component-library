import React from 'react';
import Link from "next/link";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

import styles from './MenuItem.module.css'

export interface MenuHeaderProps {
    /**
     * Button contents
     */
    label: string;
    icon: React.ReactNode;
    link: string;
}

/**
 * Primary UI component for user interaction
 */
export const MenuHeader = (props: MenuHeaderProps) => {
    return (
        <Tooltip title={props.label}>
            <List disablePadding>
                <Link href={props.link} passHref>
                    <ListItem className={styles.menuItem} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {props.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={props.label}
                                primaryTypographyProps={{
                                    style: {
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        fontWeight: 'bold'
                                    }
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Divider />
            </List>
        </Tooltip>
    );
};