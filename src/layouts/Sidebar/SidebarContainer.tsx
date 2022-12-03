import React from 'react'

export interface SidebarContainerProps {
    children: React.ReactNode
}

export const SidebarContainer = (ContainerProps: SidebarContainerProps) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            height: '100%',
            width: "100%"
        }}>
            {ContainerProps.children}
        </div>
    )
};