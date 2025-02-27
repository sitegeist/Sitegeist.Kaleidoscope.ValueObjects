import { IconButton } from '@neos-project/react-ui-components'
import React, { useEffect, useRef, useState } from 'react'

import { ControlBar } from '../components/ControlBar'
import { Preview } from '../components/preview'
import { useImageMetadata } from '../hooks/useImageMetadata'
import { AssetWithMeta, CropArea, Props } from '../types'
import { MEDIA_TYPE_IMAGE } from '../utils/constants'
import { getCropAdjustments } from '../utils/getCropAdjustments'
import { Image } from '../utils/image'

export const Editor = ({
    value: valueExtern,
    neos: { globalRegistry },
    renderSecondaryInspector,
    options: editorOptions,
    hooks,
    commit,
}: Props<AssetWithMeta>) => {
    const imageMetadata = useImageMetadata(valueExtern?.asset.__identifier)
    const valueRef = useRef<AssetWithMeta | undefined>(valueExtern)
    const i18nRegistry = globalRegistry.get('i18n')

    useEffect(() => {
        if (
            valueExtern?.asset.__identifier !== valueRef.current?.asset.__identifier &&
            editorOptions.crop?.aspectRatio.forceCrop
        ) {
            handleOpenImageCropper()
        }

        valueRef.current = valueExtern
    }, [valueExtern])

    const getImageMeta = () => {
        if (!hooks) return imageMetadata

        const croppedImage = hooks['Neos.UI:Hook.BeforeSave.CreateImageVariant']
        if (!croppedImage) return imageMetadata

        return croppedImage
    }

    const handleCloseSecondaryScreen = () => {
        renderSecondaryInspector(undefined, undefined)
    }

    const handleMediaSelection = (assetIdentifier: string) => {
        commit({
            asset: { __identifier: assetIdentifier, __flow_object_type: MEDIA_TYPE_IMAGE },
            title: '',
            alt: '',
        })
        handleCloseSecondaryScreen()
    }

    const handleMediaCrop = (cropArea: CropArea) => {
        if (!imageMetadata) return

        const { changed, cropAdjustments } = getCropAdjustments(imageMetadata, cropArea)
        if (!changed) return

        commit(valueExtern, cropAdjustments)
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

        const image = getImageMeta()
        if (!image) return

        renderSecondaryInspector('IMAGE_CROP', () => (
            <ImageCropper
                sourceImage={Image.fromImageData(image)}
                options={{
                    crop: {
                        ...editorOptions?.crop,
                        aspectRatio: {
                            ...editorOptions?.crop?.aspectRatio,
                            options: editorOptions?.crop?.aspectRatio?.options || {},
                        },
                    },
                }}
                onComplete={handleMediaCrop}
            />
        ))
    }

    return (
        <>
            <Preview
                image={valueExtern && getImageMeta()}
                alt={valueExtern?.alt}
                title={valueExtern?.title}
                onAltChange={(alt) => valueExtern && commit({ ...valueExtern, alt }, hooks)}
                onTitleChange={(title) => valueExtern && commit({ ...valueExtern, title }, hooks)}
            />
            <ControlBar>
                <IconButton
                    icon="camera"
                    size="small"
                    style="lighter"
                    onClick={handleChooseFromMedia}
                    className={''}
                    title={i18nRegistry.translate('Neos.Neos:Main:media')}
                    disabled={editorOptions?.disabled}
                />
                <IconButton
                    icon="times"
                    size="small"
                    style="lighter"
                    onClick={() => commit()}
                    className={''}
                    title={i18nRegistry.translate('Neos.Neos:Main:media')}
                    disabled={editorOptions?.disabled || !valueExtern}
                />
                {editorOptions.features?.crop && (
                    <IconButton
                        icon="crop"
                        size="small"
                        style="lighter"
                        onClick={handleOpenImageCropper}
                        className={''}
                        title={i18nRegistry.translate('Neos.Neos:Main:media')}
                        disabled={editorOptions?.disabled}
                    />
                )}
            </ControlBar>
        </>
    )
}
