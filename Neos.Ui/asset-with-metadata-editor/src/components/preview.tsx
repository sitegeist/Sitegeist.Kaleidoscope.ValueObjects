import { Icon } from '@neos-project/react-ui-components'
import React from 'react'
import styled from 'styled-components'

import { ImageMetadata } from '../types'
import { Thumbnail } from '../utils/thumbnail'

const IconContainer = styled.div<{ show?: boolean }>`
    position: relative;
    height: 100%;
    display: ${({ show }) => (show ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    z-index: 1;
    opacity: 0.7;
`

const CropArea = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    transition: var(--transition-Default) ease-out;
`

const ImageContainer = styled.div<{ small?: boolean }>`
    position: relative;
    width: 100%;
    height: ${({ small }) => (small ? '72px' : '216px')};
    background-color: #141414;
    border: 1px dashed #323232;
    border-radius: 2px;
    padding: 1px;
    overflow: hidden;
    transition: var(--transition-Default) ease-out;
`

const Overlay = styled.div<{ hover?: boolean }>`
    transition: var(--transition-Default) ease-out;
    border-radius: 2px;
    cursor: pointer;

    ${({ hover }) =>
        hover &&
        `
        &:hover {
            height: 100%;
            width: 100%;
            background-color: var(--colors-PrimaryBlue);
        }
        &:hover ${CropArea} {
            opacity: 0.7;
        }

        &:hover ${ImageContainer} {
            background-color: var(--colors-PrimaryBlue);
        }
        &:hover ${IconContainer} {
            display: flex;
        }
    `}
`

const StyledImage = styled.img`
    position: absolute;
    background-color: #fff;
    background-size: 10px 10px;
    background-position:
        0 0,
        25px 25px;
    background-image: linear-gradient(45deg, #cccccc 25%, transparent 25%, transparent 75%, #cccccc 75%, #cccccc),
        linear-gradient(45deg, #cccccc 25%, transparent 25%, transparent 75%, #cccccc 75%, #cccccc);
`

type PreviewProps = {
    image?: ImageMetadata
    onClick?: () => void
    small?: boolean
}

export const Preview = ({ image, onClick, small }: PreviewProps) => {
    const thumbnail = image ? Thumbnail.fromImageData(image, small ? 83 : 273, small ? 72 : 216) : null

    return (
        <Overlay onClick={onClick} hover={Boolean(onClick)}>
            <ImageContainer small={small}>
                <IconContainer show={!thumbnail}>
                    <Icon icon="camera" size={small ? '3xl' : '5x'} mask={['fas', 'circle']} transform="shrink-8" />
                </IconContainer>
                {thumbnail && (
                    <CropArea style={thumbnail.styles.cropArea}>
                        <StyledImage style={thumbnail.styles.thumbnail} src={thumbnail.uri} alt="Preview" />
                    </CropArea>
                )}
            </ImageContainer>
        </Overlay>
    )
}
