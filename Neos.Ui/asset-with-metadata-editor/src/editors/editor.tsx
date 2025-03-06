import React, { useEffect, useRef, useState } from 'react'

import { ControlBar } from '../components/ControlBar'
import { EditorContainer } from '../components/editorContainer'
import { MetaDataInput } from '../components/metaDataInput'
import { Preview } from '../components/preview'
import { useImageMetadata } from '../hooks/useImageMetadata'
import { AssetWithMeta, CropArea, Props } from '../types'
import { HOOK_BEFORE_SAVE, MEDIA_TYPE_IMAGE } from '../utils/constants'
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
    const [openCropper, setOpenCropper] = useState(false)
    const imageMetadata = useImageMetadata(valueExtern?.asset.__identifier)

    useEffect(() => {
        if (openCropper) {
            setTimeout(() => {
                renderSecondaryInspector(undefined, undefined)
                handleOpenImageCropper()
                setOpenCropper(false)
            }, 300)
        }
    }, [openCropper, imageMetadata?.object.__identity])

    const getImageMeta = () => {
        if (!hooks) return imageMetadata

        const croppedImage = hooks[HOOK_BEFORE_SAVE]
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
        setOpenCropper(true)
    }

    const handleMediaCrop = (cropArea: CropArea) => {
        if (!imageMetadata) return

        const { changed, cropAdjustments } = getCropAdjustments(imageMetadata, cropArea)
        if (!changed) return

        commit(valueExtern, { [HOOK_BEFORE_SAVE]: cropAdjustments })
    }

    const handleOpenMediaSelection = () => {
        const { component: MediaSelectionScreen } = globalRegistry
            .get('inspector')
            .get('secondaryEditors')
            .get('Neos.Neos/Inspector/Secondary/Editors/MediaSelectionScreen')

        const constraints = {
            ...editorOptions?.constraints,
            mediaTypes: editorOptions?.constraints?.mediaTypes || ['image/*'],
        }

        renderSecondaryInspector('IMAGE_SELECT_MEDIA', () => (
            <MediaSelectionScreen type="images" constraints={constraints} onComplete={handleMediaSelection} />
        ))
    }

    const handleOpenImageCropper = () => {
        const { component: ImageCropper } = globalRegistry
            .get('inspector')
            .get('secondaryEditors')
            .get('Neos.Neos/Inspector/Secondary/Editors/ImageCropper')

        const image = getImageMeta()
        console.log('image', image)
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
        <EditorContainer>
            <Preview image={valueExtern && getImageMeta()} onClick={handleOpenMediaSelection} />
            <MetaDataInput
                alt={valueExtern?.alt}
                title={valueExtern?.title}
                selectedImageIdentifier={valueExtern?.asset.__identifier}
                onAltChange={(alt) => valueExtern && commit({ ...valueExtern, alt }, hooks)}
                onTitleChange={(title) => valueExtern && commit({ ...valueExtern, title }, hooks)}
            />
            <ControlBar
                onOpenImageSelector={handleOpenMediaSelection}
                onOpenImageCropper={handleOpenImageCropper}
                onDelete={() => commit('')}
                cropEnabled={Boolean(editorOptions?.features?.crop)}
                selectedImageIdentifier={valueExtern?.asset.__identifier}
            />
        </EditorContainer>
    )
}
