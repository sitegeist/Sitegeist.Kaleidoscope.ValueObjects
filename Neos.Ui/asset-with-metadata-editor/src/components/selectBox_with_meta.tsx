import {
    Label,
    SelectBox_Option_MultiLineWithThumbnail,
    TextInput,
} from '@neos-project/react-ui-components'
import React, { useEffect, useState } from 'react'

import { useEditorContext } from '../context/editorContext'

export const SelectBox_With_Meta = (props: any) => {
    const { setMeta, meta, extern } = useEditorContext()

    const [altValue, setAltValue] = useState('')
    const [titleValue, setTitleValue] = useState('')

    useEffect(() => {
        const currentExtern = extern.find((e) => e.asset.__identifier === props.option.identifier)
        if (!currentExtern) return

        setTitleValue(currentExtern.title ?? '')
        setAltValue(currentExtern.alt ?? '')
    }, [extern, props.option.identifier])

    const currenAssetId = props.option.identifier
    const currentMeta = meta.find((meta) => meta.id === currenAssetId)

    const onChangeTitle = () => {
        if (currentMeta) {
            return setMeta({
                ...currentMeta,
                title: titleValue,
            })
        }

        setMeta({ id: currenAssetId, title: titleValue })
    }

    const onChangeAlt = () => {
        if (currentMeta) {
            return setMeta({
                ...currentMeta,
                alt: altValue,
            })
        }

        setMeta({ id: currenAssetId, alt: altValue })
    }

    return (
        <>
            <SelectBox_Option_MultiLineWithThumbnail
                {...props}
                imageUri={props.option.preview}
                label={props.option.label}
            />
            <div style={{ backgroundColor: '#141414' }}>
                <Label htmlFor="title">
                    Title
                    <TextInput
                        type="text"
                        id="title"
                        onChange={setTitleValue}
                        onBlur={onChangeTitle}
                        value={titleValue}
                    />
                </Label>
                <Label htmlFor="alt">
                    Alt
                    <TextInput
                        type="text"
                        id="alt"
                        onChange={setAltValue}
                        onBlur={onChangeAlt}
                        value={altValue}
                    />
                </Label>
            </div>
        </>
    )
}
