import { Icon, Label, TextInput } from '@neos-project/react-ui-components'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ImageMetadata } from '../types'
import { debounce } from '../utils/debounce'
import { Thumbnail } from '../utils/thumbnail'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 12px;
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 216px;
    background-color: #141414;
    border: 1px dashed #323232;
    border-radius: 2px;
    padding: 1px;
    overflow: hidden;
`

const CropArea = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
`

const StyledImage = styled.img`
    position: absolute;
    background-color: #fff;
    background-size: 10px 10px;
    background-position:
        0 0,
        25px 25px;
    background-image: linear-gradient(
            45deg,
            #cccccc 25%,
            transparent 25%,
            transparent 75%,
            #cccccc 75%,
            #cccccc
        ),
        linear-gradient(45deg, #cccccc 25%, transparent 25%, transparent 75%, #cccccc 75%, #cccccc);
`

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const debounceAlt = debounce(300)
const debounceTitle = debounce(300)

type PreviewProps = {
    image?: ImageMetadata
    title?: string
    alt?: string
    onTitleChange: (title: string) => void
    onAltChange: (alt: string) => void
}

export const Preview = ({ image, title, alt, onTitleChange, onAltChange }: PreviewProps) => {
    const [altValue, setAltValue] = useState('')
    const [titleValue, setTitleValue] = useState('')

    const thumbnail = image ? Thumbnail.fromImageData(image, 273, 216) : null

    useEffect(() => {
        setAltValue(alt ?? '')
        setTitleValue(title ?? '')
    }, [title, alt])

    const handleTitleChange = (value: string) => {
        if (title === value) return

        setTitleValue(value)

        debounceTitle(() => {
            onTitleChange(value)
        })
    }

    const handleAltChange = (value: string) => {
        if (alt === value) return

        setAltValue(value)

        debounceAlt(() => {
            onAltChange(value)
        })
    }

    return (
        <Container>
            <ImageContainer>
                <CropArea style={thumbnail ? thumbnail.styles.cropArea : {}}>
                    {thumbnail && (
                        <StyledImage
                            style={thumbnail ? thumbnail.styles.thumbnail : {}}
                            src={thumbnail.uri}
                            alt="Preview"
                        />
                    )}
                </CropArea>
            </ImageContainer>
            <TextContainer>
                <Label htmlFor="title">
                    Title
                    <TextInput
                        type="text"
                        id="title"
                        value={titleValue}
                        onChange={handleTitleChange}
                    />
                </Label>
                <Label htmlFor="alt">
                    Alt
                    <TextInput type="text" id="alt" value={altValue} onChange={handleAltChange} />
                </Label>
            </TextContainer>
        </Container>
    )
}
