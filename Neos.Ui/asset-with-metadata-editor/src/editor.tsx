import { MultiSelectBox } from '@neos-project/react-ui-components'
import React, { useEffect, useRef, useState } from 'react'

import { EditorContextProvider, useEditorContext } from './editorContext'
import { SelectBox_With_Meta } from './selectBox_with_meta'
import { AssetWithMeta, Option } from './types'

const MEDIA_TYPE_IMAGE = 'Neos\\Media\\Domain\\Model\\Image'

type Props = {
    identifier: string
    className: string
    value: AssetWithMeta[]
    options: {
        multiple: boolean
        placeholder: string
        disabled?: boolean
        threshold?: any
    }
    editor: string
    renderSecondaryInspector: Function
    neos: {
        globalRegistry: any
    }
    commit: (value: AssetWithMeta[]) => void
}

export const Editor = ({
    value: valueExtern = [],
    neos: { globalRegistry },
    renderSecondaryInspector,
    options: { multiple, placeholder, disabled, threshold },
    commit,
}: Props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [options, setOptions] = useState<Option[]>([])

    const valueRef = useRef<AssetWithMeta[]>(valueExtern)

    const i18nRegistry = globalRegistry.get('i18n')
    const assetLookupDataLoader = globalRegistry.get('dataLoaders').get('AssetLookup')

    useEffect(() => {
        valueRef.current = valueExtern
    }, [valueExtern])

    const getIdentity = (value: AssetWithMeta) => {
        // Information coming from metadata
        if (value && value.asset.__identifier) {
            return value.asset.__identifier
        }
        return value
    }

    const getValue = () => {
        return getIdentity(valueRef.current[0])
    }

    const getValues = () => {
        return Array.isArray(valueRef.current) && Boolean(valueRef.current.length)
            ? valueRef.current.map(getIdentity)
            : []
    }

    useEffect(() => {
        const resolver = async () => {
            if (valueExtern) {
                setIsLoading(true)

                const values = multiple ? getValues() : [getValue()]

                const options = await Promise.all(
                    values.map((value) => assetLookupDataLoader.resolveValue({}, value))
                )

                setIsLoading(false)
                setOptions([].concat(...options))
            }
        }

        resolver()
    }, [valueExtern])

    const handleMediaSelection = (assetIdentifier: any) => {
        commit([
            ...valueRef.current,
            {
                asset: { __identifier: assetIdentifier, __flow_object_type: MEDIA_TYPE_IMAGE },
                title: '',
                alt: '',
            },
        ])
    }

    const handleChooseFromMedia = () => {
        const { component: MediaSelectionScreen } = globalRegistry
            .get('inspector')
            .get('secondaryEditors')
            .get('Neos.Neos/Inspector/Secondary/Editors/MediaSelectionScreen')

        renderSecondaryInspector('IMAGE_SELECT_MEDIA', () => (
            <MediaSelectionScreen constraints={{}} onComplete={handleMediaSelection} />
        ))
    }

    const handleChooseFile = () => {
        const { component: AssetUploadScreen } = globalRegistry
            .get('inspector')
            .get('secondaryEditors')
            .get('Neos.Neos/Inspector/Secondary/Editors/AssetUploadScreen')

        renderSecondaryInspector('ASSET_UPLOAD_MEDIA', () => (
            <AssetUploadScreen
                type={'images'}
                constraints={{}}
                onComplete={(props: any) => console.log('handleChooseFile.onComplete', props)}
                additionalData={{}}
            />
        ))
    }

    return (
        <EditorContextProvider extern={valueExtern} update={commit}>
            <MultiSelectBox
                optionValueField="identifier"
                loadingLabel={i18nRegistry.translate('Neos.Neos:Main:loading')}
                displaySearchBox={true}
                ListPreviewElement={SelectBox_With_Meta}
                placeholder={i18nRegistry.translate(placeholder)}
                options={options}
                values={getValues()}
                onValuesChange={commit}
                displayLoadingIndicator={isLoading}
                searchOptions={[]}
                showDropDownToggle={false}
                onSearchTermChange={() => {}}
                noMatchesFoundLabel={i18nRegistry.translate('Neos.Neos:Main:noMatchesFound')}
                searchBoxLeftToTypeLabel={i18nRegistry.translate(
                    'Neos.Neos:Main:searchBoxLeftToType'
                )}
                threshold={threshold}
                disabled={disabled}
            />
            <button onClick={handleChooseFromMedia}>Media</button>
            <button onClick={handleChooseFile}>File</button>
        </EditorContextProvider>
    )
}
