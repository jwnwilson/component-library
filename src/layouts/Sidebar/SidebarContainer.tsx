import React from 'react'

export interface SidebarContainerProps {
    children: React.ReactNode
}

const styles = {
    display: "flex",
    flexDirection: "row",
    height: '100%',
    width: "100%"
};

export const SidebarContainer = (ContainerProps: SidebarContainerProps) => {
    return (
        <div style={styles}>
            {ContainerProps.children}
        </div>
    )
};