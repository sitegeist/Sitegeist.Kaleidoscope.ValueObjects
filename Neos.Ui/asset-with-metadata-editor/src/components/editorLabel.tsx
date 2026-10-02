import { Icon, Label, Tooltip } from '@neos-project/react-ui-components'
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledLabel = styled(Label)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

const HelpButton = styled.span`
    padding-left: 4px;
    cursor: pointer;
`

const HelpThumbnail = styled.img`
    max-width: 100%;
`

type EditorLabelProps = {
    id?: string
    label?: string
    helpMessage?: string
    helpThumbnail?: string
    i18nRegistry?: { translate: (id: string) => string }
}

const getThumbnailSrc = (thumbnail: string) =>
    thumbnail.startsWith('resource://') ? '/_Resources/Static/Packages/' + thumbnail.substring(11) : thumbnail

// Replaces the label rendered by the Neos EditorEnvelope (editor is registered with `hasOwnLabel`),
// so the help message can be shown directly below the label instead of below the whole editor.
export const EditorLabel = ({ id, label, helpMessage, helpThumbnail, i18nRegistry }: EditorLabelProps) => {
    const [showHelpMessage, setShowHelpMessage] = useState(false)
    const translate = (value: string) => i18nRegistry?.translate(value) ?? value

    if (!label && !helpMessage && !helpThumbnail) return null

    const toggleHelpMessage = (event: React.MouseEvent) => {
        event.preventDefault()
        setShowHelpMessage(!showHelpMessage)
    }

    return (
        <>
            <span>
                <StyledLabel htmlFor={id}>
                    {label ? translate(label) : ''}
                    {(helpMessage || helpThumbnail) && (
                        <HelpButton role="button" onClick={toggleHelpMessage}>
                            <Icon icon="question-circle" />
                        </HelpButton>
                    )}
                </StyledLabel>
            </span>
            {showHelpMessage && (
                <Tooltip renderInline>
                    {helpMessage ? <p>{translate(helpMessage)}</p> : ''}
                    {helpThumbnail ? <HelpThumbnail alt={label} src={getThumbnailSrc(helpThumbnail)} /> : ''}
                </Tooltip>
            )}
        </>
    )
}
