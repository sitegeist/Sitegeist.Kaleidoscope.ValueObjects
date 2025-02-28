import React from 'react'
import styled from 'styled-components'

import { ImageMetadata } from '../types'
import { Preview } from './preview'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    width: 100%;
`
const GridItem = styled.div<{ selected?: boolean }>`
    width: 100%;
    height: 100%;
    border: 1px solid ${({ selected }) => (selected ? 'var(--colors-PrimaryBlue)' : 'transparent')};
`

type PreviewGridProps = {
    images: ImageMetadata[]
    onSelect: (imageIdentifier: string) => void
    selectedImageIdentifier?: string
    onEmptyPreviewClick: () => void
}

//todo add drag and drop
export const PreviewGrid = ({
    images,
    selectedImageIdentifier,
    onSelect,
    onEmptyPreviewClick,
}: PreviewGridProps) => {
    return (
        <Grid>
            {images.length === 0 && <Preview small onClick={onEmptyPreviewClick} />}
            {images.map((image) => (
                <GridItem
                    key={image.object.__identity}
                    selected={selectedImageIdentifier === image.object.__identity}
                    onClick={() => onSelect(image.object.__identity)}
                >
                    <Preview image={image} small />
                </GridItem>
            ))}
        </Grid>
    )
}
