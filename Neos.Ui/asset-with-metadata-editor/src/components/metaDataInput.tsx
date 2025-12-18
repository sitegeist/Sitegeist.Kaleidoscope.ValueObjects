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

    .required {
        border: 1px solid #ff460d;
    }
`

const AltContainer = styled.div<{ required?: boolean }>`
    display: flex;
    > div {
        flex-grow: 1;
    }
    border: ${({ required }) => (required ? '1px solid #ff460d' : 'none')};
`

const debounceAlt = debounce(300)
const debounceTitle = debounce(300)

type MetaDataInputProps = {
    title?: string
    alt?: string
    requireTitle?: boolean
    requireAlt?: boolean
    sidekickApiKey?: string
    selectedImageIdentifier?: string
    selectedImageOriginUrl?: string
    onTitleChange: (title: string) => void
    onAltChange: (alt: string) => void
}

export const MetaDataInput = ({
    title,
    alt,
    requireTitle,
    requireAlt,
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

    const isTitleValid = selectedImageIdentifier && requireTitle && !titleValue
    const isAltValid = selectedImageIdentifier && requireAlt && !altValue

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
                    className={isTitleValid && 'required'}
                />
            </Label>
            <Label htmlFor="alt">
                Alt
                <AltContainer required={Boolean(isAltValid)}>
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
