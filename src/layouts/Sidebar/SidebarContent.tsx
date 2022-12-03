import React from 'react'
import Container from '@mui/material/Container';

export interface SidebarContentProps {
    children: React.ReactNode
}

const styles = {
    height: '100%',
    width: "100%"
};

export const SidebarContent = (contentProps: SidebarContentProps) => {
    return (
        <div style={styles}>
            {contentProps.children}
        </div>
    )
};