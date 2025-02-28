import { Label, TextInput } from '@neos-project/react-ui-components'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { debounce } from '../utils/debounce'

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
`
const debounceAlt = debounce(300)
const debounceTitle = debounce(300)

type MetaDataInputProps = {
    title?: string
    alt?: string
    onTitleChange: (title: string) => void
    onAltChange: (alt: string) => void
    selectedImageIdentifier?: string
}

export const MetaDataInput = ({
    title,
    alt,
    onTitleChange,
    onAltChange,
    selectedImageIdentifier,
}: MetaDataInputProps) => {
    const [altValue, setAltValue] = useState('')
    const [titleValue, setTitleValue] = useState('')

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
        <TextContainer>
            <Label htmlFor="title">
                Title
                <TextInput
                    type="text"
                    id="title"
                    value={titleValue}
                    onChange={handleTitleChange}
                    disabled={!selectedImageIdentifier}
                />
            </Label>
            <Label htmlFor="alt">
                Alt
                <TextInput
                    type="text"
                    id="alt"
                    value={altValue}
                    onChange={handleAltChange}
                    disabled={!selectedImageIdentifier}
                />
            </Label>
        </TextContainer>
    )
}
