import { IconButton } from '@neos-project/react-ui-components'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 4px;
    justify-content: space-between;
    margin-top: 6px;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 4px;
`

type ControlBarProps = {
    onOpenImageSelector: () => void
    onOpenImageCropper: () => void
    onOpenMediaUpload: () => void
    onDelete: () => void
    cropEnabled: boolean
    uploadEnabled: boolean
    selectedImageIdentifier?: string
}

export const ControlBar = ({
    onOpenImageSelector,
    onOpenMediaUpload,
    onOpenImageCropper,
    onDelete,
    cropEnabled,
    uploadEnabled,
    selectedImageIdentifier,
}: ControlBarProps) => (
    <Container>
        <ButtonContainer>
            <IconButton icon="camera" size="small" style="lighter" onClick={onOpenImageSelector} />
            {uploadEnabled && <IconButton icon="upload" size="small" style="lighter" onClick={onOpenMediaUpload} />}
            {cropEnabled && (
                <IconButton
                    icon="crop"
                    size="small"
                    style="lighter"
                    onClick={onOpenImageCropper}
                    disabled={!selectedImageIdentifier}
                />
            )}
        </ButtonContainer>
        <IconButton icon="times" size="small" style="lighter" onClick={onDelete} disabled={!selectedImageIdentifier} />
    </Container>
)
