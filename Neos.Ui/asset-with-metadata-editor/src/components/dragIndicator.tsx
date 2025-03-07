import React from 'react'
import styled from 'styled-components'

const DragDot = styled.div`
    width: 3px;
    height: 3px;
    background-color: white;
    border-radius: 100%;
`
const DragIndicatorContainer = styled.div`
    position: absolute;
    top: 3px;
    right: 3px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    align-items: center;
    justify-content: center;
    padding: 2px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    opacity: 0.5;
    z-index: 10;
`

export const DragIndicator = () => {
    return (
        <DragIndicatorContainer>
            <DragDot />
            <DragDot />
            <DragDot />
            <DragDot />
            <DragDot />
            <DragDot />
        </DragIndicatorContainer>
    )
}
