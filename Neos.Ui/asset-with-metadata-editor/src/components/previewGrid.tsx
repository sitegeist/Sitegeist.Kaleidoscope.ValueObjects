import {
    DndContext,
    DragEndEvent,
    PointerSensor,
    closestCenter,
    useSensor,
    useSensors,
} from '@dnd-kit/core'
import { SortableContext, arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React, { useMemo } from 'react'
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
    selectedImageIdentifier?: string
    onSelect: (imageIdentifier: string) => void
    onEmptyPreviewClick: () => void
    onSort: (imageIdentifiers: string[]) => void
}

//todo add drag and drop
export const PreviewGrid = ({
    images,
    selectedImageIdentifier,
    onSelect,
    onEmptyPreviewClick,
    onSort,
}: PreviewGridProps) => {
    const sensors = useSensors(useSensor(PointerSensor))

    const imageIdentifiers = useMemo(() => images.map((image) => image.object.__identity), [images])

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event

        if (over && active.id !== over.id) {
            const oldIndex = imageIdentifiers.indexOf(active.id as string)
            const newIndex = imageIdentifiers.indexOf(over?.id as string)

            onSort(arrayMove(imageIdentifiers, oldIndex, newIndex))
        }
    }

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={imageIdentifiers}>
                <Grid>
                    {images.length === 0 && <Preview small onClick={onEmptyPreviewClick} />}
                    {images.map((image) => (
                        <SortableGridItem
                            key={image.object.__identity}
                            image={image}
                            selected={selectedImageIdentifier === image.object.__identity}
                            onClick={() => onSelect(image.object.__identity)}
                        />
                    ))}
                </Grid>
            </SortableContext>
        </DndContext>
    )
}

type SortableGridItemProps = {
    image: ImageMetadata
    selected: boolean
    onClick: () => void
}
const SortableGridItem = ({ image, selected, onClick }: SortableGridItemProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: image.object.__identity,
    })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <GridItem
            ref={setNodeRef}
            style={style}
            selected={selected}
            onClick={onClick}
            {...attributes}
            {...listeners}
        >
            <Preview image={image} small />
        </GridItem>
    )
}
