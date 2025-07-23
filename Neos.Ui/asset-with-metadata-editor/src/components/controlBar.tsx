import { IconButton } from '@neos-project/react-ui-components'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 4px;
    justify-content: space-between;
    margin-top: 6px;
`

type ControlBarProps = {
    onOpenImageSelector: () => void
    onOpenImageCropper: () => void
    onDelete: () => void
    cropEnabled: boolean
    selectedImageIdentifier?: string
}

export const ControlBar = ({
    onOpenImageSelector,
    onOpenImageCropper,
    onDelete,
    cropEnabled,
    selectedImageIdentifier,
}: ControlBarProps) => (
    <Container>
        <div>
            <IconButton icon="camera" size="small" style="lighter" onClick={onOpenImageSelector} />
            {cropEnabled && (
                <IconButton
                    icon="crop"
                    size="small"
                    style="lighter"
                    onClick={onOpenImageCropper}
                    disabled={!selectedImageIdentifier}
                />
            )}
        </div>
        <IconButton icon="times" size="small" style="lighter" onClick={onDelete} disabled={!selectedImageIdentifier} />
    </Container>
)
