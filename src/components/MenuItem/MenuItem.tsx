import React from 'react';
import Link from "next/link";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';

import styles from './MenuItem.module.css'

export interface MenuItemProps {
    /**
     * Button contents
     */
    label: string;
    icon: React.ReactNode;
    link: string | object;
    selected?: boolean;
    onClick?: (event:any) => void;
}

/**
 * Primary UI component for user interaction
 */
export const MenuItem = (props: MenuItemProps) => {
    return (
        <Tooltip title={props.label}>
            <ListItem className={styles.menuItem} disablePadding>
                <Link href={props.link} passHref>
                    <ListItemButton
                        selected={props.selected ? false: true}
                        onClick={props.onClick ? props.onClick: undefined}
                    >
                        <ListItemIcon>
                            {props.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={props.label}
                            primaryTypographyProps={{
                                style: {
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }
                            }}
                        />
                    </ListItemButton>
                </Link>
            </ListItem>
        </Tooltip>
    );
};