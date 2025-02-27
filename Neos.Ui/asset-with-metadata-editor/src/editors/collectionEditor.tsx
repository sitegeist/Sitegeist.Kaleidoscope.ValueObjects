import { IconButton, MultiSelectBox } from '@neos-project/react-ui-components'
import React, { useEffect, useRef, useState } from 'react'

import { SelectBox_With_Meta } from '../components/selectBox_with_meta'
import { EditorContextProvider } from '../context/editorContext'
import { AssetWithMeta, Option, Props } from '../types'
import { MEDIA_TYPE_IMAGE } from '../utils/constants'
import { getIdentity } from '../utils/getIdentity'

export const CollectionEditor = ({
    value: valueExtern = [],
    neos: { globalRegistry },
    renderSecondaryInspector,
    options: editorOptions,
    commit,
}: Props<AssetWithMeta[]>) => {
    const [isLoading, setIsLoading] = useState(false)
    const [options, setOptions] = useState<Option[]>([])

    const valueRef = useRef<AssetWithMeta[]>(valueExtern)

    const i18nRegistry = globalRegistry.get('i18n')
    const assetLookupDataLoader = globalRegistry.get('dataLoaders').get('AssetLookup')

    useEffect(() => {
        valueRef.current = valueExtern
    }, [valueExtern])

    const getValues = () => {
        return Array.isArray(valueRef.current) && Boolean(valueRef.current.length)
            ? valueRef.current.map(getIdentity)
            : []
    }

    useEffect(() => {
        const resolver = async () => {
            if (valueExtern) {
                setIsLoading(true)

                const values = getValues()

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

        const constraints = {
            ...editorOptions?.constraints,
            mediaTypes: editorOptions?.constraints?.mediaTypes || ['image/*'],
        }

        renderSecondaryInspector('IMAGE_SELECT_MEDIA', () => (
            <MediaSelectionScreen constraints={constraints} onComplete={handleMediaSelection} />
        ))
    }

    const handleDelete = (values: string[]) => {
        const filteredValues = valueRef.current.filter((v) => values.includes(v.asset.__identifier))
        commit(filteredValues)
    }

    return (
        <EditorContextProvider extern={valueExtern} update={commit}>
            <MultiSelectBox
                optionValueField="identifier"
                loadingLabel={i18nRegistry.translate('Neos.Neos:Main:loading')}
                displaySearchBox={false}
                ListPreviewElement={SelectBox_With_Meta}
                placeholder={
                    editorOptions?.placeholder
                        ? i18nRegistry.translate(editorOptions.placeholder)
                        : ''
                }
                options={options}
                values={getValues()}
                onValuesChange={handleDelete}
                displayLoadingIndicator={isLoading}
                searchOptions={[]}
                showDropDownToggle={false}
                onSearchTermChange={() => {}}
                noMatchesFoundLabel={i18nRegistry.translate('Neos.Neos:Main:noMatchesFound')}
                searchBoxLeftToTypeLabel={i18nRegistry.translate(
                    'Neos.Neos:Main:searchBoxLeftToType'
                )}
                threshold={editorOptions?.threshold}
                disabled={editorOptions?.disabled}
            />
            <IconButton
                icon="camera"
                size="small"
                style="lighter"
                onClick={handleChooseFromMedia}
                className={''}
                title={i18nRegistry.translate('Neos.Neos:Main:media')}
                disabled={editorOptions?.disabled}
            />
        </EditorContextProvider>
    )
}
