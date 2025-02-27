import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 4px;
`

export const ControlBar = ({ children }: PropsWithChildren) => {
    return <Container>{children}</Container>
}
