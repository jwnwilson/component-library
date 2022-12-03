import React, { useState } from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import styles from './Sidebar.module.css'


export interface sidebarProps {
    children: React.ReactNode
}

export const Sidebar = (sideBarProps: sidebarProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const classNames = isOpen ? styles.nav: styles.nav + " " + styles.closed;
    const expandIcon = isOpen ? (
        <KeyboardDoubleArrowLeftIcon 
            onClick={() => setIsOpen(!isOpen)}
            className={styles.icon}
            fontSize={"large"}
        ></KeyboardDoubleArrowLeftIcon>
    ) : (
        <KeyboardDoubleArrowRightIcon 
            onClick={() => setIsOpen(!isOpen)}
            className={styles.icon}
            fontSize={"large"}
        ></KeyboardDoubleArrowRightIcon>
    )

    
    return (
        <nav className={classNames}>
            {sideBarProps.children}
            <div className={styles.expandContainer}>
                {expandIcon}
            </div>
        </nav>
    );
};