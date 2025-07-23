import { IconButton, Label, TextInput } from '@neos-project/react-ui-components'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useSideKick } from '../hooks/useSideKick'
import { debounce } from '../utils/debounce'

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const AltContainer = styled.div`
    display: flex;
    > div {
        flex-grow: 1;
    }
`

const debounceAlt = debounce(300)
const debounceTitle = debounce(300)

type MetaDataInputProps = {
    title?: string
    alt?: string
    sidekickApiKey?: string
    selectedImageIdentifier?: string
    selectedImageOriginUrl?: string
    onTitleChange: (title: string) => void
    onAltChange: (alt: string) => void
}

export const MetaDataInput = ({
    title,
    alt,
    selectedImageIdentifier,
    sidekickApiKey,
    selectedImageOriginUrl,
    onTitleChange,
    onAltChange,
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

    const { generateAltText, isPending } = useSideKick(handleAltChange)

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
                <AltContainer>
                    <TextInput
                        type="text"
                        id="alt"
                        value={altValue}
                        onChange={handleAltChange}
                        disabled={!selectedImageIdentifier}
                    />
                    {sidekickApiKey && selectedImageOriginUrl && (
                        <IconButton
                            icon={isPending ? 'spinner' : 'magic'}
                            iconProps={{ theme: isPending ? 'icon--spin' : 'icon' }}
                            size="regular"
                            style="lighter"
                            onClick={() =>
                                generateAltText({ imageUrl: selectedImageOriginUrl, apiKey: sidekickApiKey })
                            }
                            disabled={isPending}
                        />
                    )}
                </AltContainer>
            </Label>
        </TextContainer>
    )
}
