import { IconButton, SelectBox } from '@neos-project/react-ui-components'
import React, { useEffect, useRef, useState } from 'react'

import { SelectBox_With_Meta } from '../components/selectBox_with_meta'
import { EditorContextProvider } from '../context/editorContext'
import { useImageMetadata } from '../hooks/useImageMetadata'
import { AssetWithMeta, Option, Props } from '../types'

const MEDIA_TYPE_IMAGE = 'Neos\\Media\\Domain\\Model\\Image'

export const Editor = ({
    value: valueExtern,
    neos: { globalRegistry },
    renderSecondaryInspector,
    options: editorOptions,
    commit,
}: Props<AssetWithMeta | undefined>) => {
    const [isLoading, setIsLoading] = useState(false)
    const [options, setOptions] = useState<Option[]>([])
    const imageMetadata = useImageMetadata(valueExtern?.asset.__identifier)

    const valueRef = useRef<AssetWithMeta | undefined>(valueExtern)

    const i18nRegistry = globalRegistry.get('i18n')
    const assetLookupDataLoader = globalRegistry.get('dataLoaders').get('AssetLookup')

    useEffect(() => {
        valueRef.current = valueExtern
    }, [valueExtern])

    const getIdentity = (value: AssetWithMeta) => {
        if (value && value.asset.__identifier) {
            return value.asset.__identifier
        }
        return value
    }

    const getValue = () => {
        if (!valueRef.current) return

        return getIdentity(valueRef.current)
    }

    useEffect(() => {
        const resolver = async () => {
            if (valueExtern) {
                setIsLoading(true)

                const value = getValue()

                const options = await assetLookupDataLoader.resolveValue({}, value)

                setIsLoading(false)
                setOptions([].concat(...options))
            }
        }

        resolver()
    }, [valueExtern])

    const handleMediaSelection = (assetIdentifier: any) => {
        commit({
            asset: { __identifier: assetIdentifier, __flow_object_type: MEDIA_TYPE_IMAGE },
            title: '',
            alt: '',
        })
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
            <MediaSelectionScreen
                type="images"
                constraints={constraints}
                onComplete={handleMediaSelection}
            />
        ))
    }

    const handleOpenImageCropper = () => {
        const { component: ImageCropper } = globalRegistry
            .get('inspector')
            .get('secondaryEditors')
            .get('Neos.Neos/Inspector/Secondary/Editors/ImageCropper')

        renderSecondaryInspector('IMAGE_CROP', () => (
            <ImageCropper
                sourceImage={imageMetadata}
                options={options}
                onComplete={(data: any) => console.log('ImageCropper', data)}
            />
        ))
    }

    return (
        <EditorContextProvider
            extern={valueExtern ? [valueExtern] : []}
            update={(value) => commit(value[0])}
        >
            <SelectBox
                optionValueField="identifier"
                loadingLabel={i18nRegistry.translate('Neos.Neos:Main:loading')}
                displaySearchBox={false}
                ListPreviewElement={SelectBox_With_Meta}
                placeholder={
                    editorOptions?.placeholder
                        ? i18nRegistry.translate(editorOptions.placeholder)
                        : ''
                }
                options={valueExtern ? options : undefined}
                value={getValue()}
                onHeaderClick={() => {
                    /* prevent toggling of select box dropdown */
                }}
                onValueChange={() => commit(undefined)}
                displayLoadingIndicator={isLoading}
                showDropDownToggle={false}
                allowEmpty={true}
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
            />{' '}
            <IconButton
                icon="crop"
                size="small"
                style="lighter"
                onClick={handleOpenImageCropper}
                className={''}
                title={i18nRegistry.translate('Neos.Neos:Main:media')}
                disabled={editorOptions?.disabled}
            />
        </EditorContextProvider>
    )
}
