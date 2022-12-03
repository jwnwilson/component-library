import React from 'react'
import Container from '@mui/material/Container';

export interface ContentProps {
    children: React.ReactNode
}

export const Content = (contentProps: ContentProps) => {
    return (
        <Container style={{overflowY: "scroll", height: "100%"}}>
            {contentProps.children}
        </Container>
    )
};