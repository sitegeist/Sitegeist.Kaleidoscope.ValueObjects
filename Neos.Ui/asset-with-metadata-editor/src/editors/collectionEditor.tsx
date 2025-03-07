import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { ControlBar } from '../components/controlBar'
import { EditorContainer } from '../components/editorContainer'
import { MetaDataInput } from '../components/metaDataInput'
import { PreviewGrid } from '../components/previewGrid'
import { useImageMetadataCollection } from '../hooks/useImageMetaDataCollection'
import { AssetWithMeta, CropArea, Props } from '../types'
import { HOOK_BEFORE_SAVE_COLLECTION, MEDIA_TYPE_IMAGE } from '../utils/constants'
import { getCropAdjustments } from '../utils/getCropAdjustments'
import { getForceCrop } from '../utils/getForceCrop'
import { getImageMetaData } from '../utils/getImageMetaData'
import { Image } from '../utils/image'

export const CollectionEditor = ({
    value: valueExtern = [],
    neos: { globalRegistry },
    renderSecondaryInspector,
    options: editorOptions,
    highlight,
    hooks,
    commit,
}: Props<AssetWithMeta[]>) => {
    const imagesIdentifiers = useMemo(() => {
        return valueExtern.map((v) => v.asset.__identifier)
    }, [valueExtern])

    const imageMetadataCollection = useImageMetadataCollection(imagesIdentifiers)
    const [selectedImageIdentifier, setSelectedImageIdentifier] = useState<string>(valueExtern[0]?.asset.__identifier)
    const valueRef = useRef<AssetWithMeta[]>(valueExtern)
    const hooksRef = useRef<any>(hooks)
    const selectedImage = valueExtern.find((v) => v.asset.__identifier === selectedImageIdentifier)

    useEffect(() => {
        valueRef.current = valueExtern
        hooksRef.current = hooks
    }, [valueExtern, hooks])

    const getImageMetadata = useCallback(
        (assetIdentifier: string) => {
            const imageMetaData = imageMetadataCollection.find((image) => image.object.__identity === assetIdentifier)

            if (!hooks) return imageMetaData

            const croppedImages = hooks[HOOK_BEFORE_SAVE_COLLECTION]
            if (!croppedImages) return imageMetaData

            const croppedImage = croppedImages.find((image) => image.object.__identity === assetIdentifier)
            if (!croppedImage) return imageMetaData

            return croppedImage
        },
        [imageMetadataCollection, hooks]
    )

    const handleDelete = () => {
        if (!selectedImageIdentifier) return

        const filteredValues = valueExtern.filter((v) => v.asset.__identifier !== selectedImageIdentifier)
        commit(filteredValues)
        setSelectedImageIdentifier(filteredValues[0]?.asset.__identifier)
    }

    const handleAltChange = (alt: string) => {
        if (!selectedImageIdentifier) return

        const updatedImages = valueExtern.map((image) => {
            if (image.asset.__identifier !== selectedImageIdentifier) return image

            return { ...image, alt }
        })

        commit(updatedImages)
    }

    const handleTitleChange = (title: string) => {
        if (!selectedImageIdentifier) return

        const updatedImages = valueExtern.map((image) => {
            if (image.asset.__identifier !== selectedImageIdentifier) return image

            return { ...image, title }
        })

        commit(updatedImages)
    }

    const handleMediaSelection = async (assetIdentifier: string) => {
        if (valueExtern.some((v) => v.asset.__identifier === assetIdentifier)) return

        const cropOptions = editorOptions?.crop

        const commitValue = [
            ...valueRef.current,
            {
                asset: { __identifier: assetIdentifier, __flow_object_type: MEDIA_TYPE_IMAGE },
                title: '',
                alt: '',
            },
        ]

        if (!cropOptions?.aspectRatio.forceCrop) return commit(commitValue)

        const imageMetadata = await getImageMetaData(assetIdentifier)
        if (!imageMetadata) return commit(commitValue)

        const cropAdjustments = getForceCrop(imageMetadata, cropOptions)
        if (!cropAdjustments) return commit(commitValue)

        const adjustments = hooksRef.current ? hooksRef.current[HOOK_BEFORE_SAVE_COLLECTION] : undefined

        return commit(commitValue, {
            [HOOK_BEFORE_SAVE_COLLECTION]: [...(adjustments ?? []), cropAdjustments],
        })
    }

    const handleMediaCrop = (cropArea: CropArea) => {
        if (!selectedImageIdentifier) return

        const imageMetadata = getImageMetadata(selectedImageIdentifier)
        if (!imageMetadata) return

        const { changed, cropAdjustments } = getCropAdjustments(imageMetadata, cropArea)
        if (!changed) return

        if (!hooks) return commit(valueExtern, { [HOOK_BEFORE_SAVE_COLLECTION]: [cropAdjustments] })

        const adjustments = hooks[HOOK_BEFORE_SAVE_COLLECTION]
        if (!adjustments) return commit(valueExtern, { [HOOK_BEFORE_SAVE_COLLECTION]: [cropAdjustments] })

        const isCropped = adjustments.find((a) => a.object.__identity === selectedImageIdentifier)
        if (!isCropped) return commit(valueExtern, { [HOOK_BEFORE_SAVE_COLLECTION]: [...adjustments, cropAdjustments] })

        commit(valueExtern, {
            [HOOK_BEFORE_SAVE_COLLECTION]: [
                ...adjustments.map((a) => {
                    if (a.object.__identity !== selectedImageIdentifier) return a

                    return cropAdjustments
                }),
            ],
        })
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

        const image = getImageMetadata(selectedImageIdentifier!)
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

    const images = useMemo(() => {
        return valueExtern.map((v) => getImageMetadata(v.asset.__identifier)!).filter(Boolean)
    }, [valueExtern, getImageMetadata])

    const handleImageSorting = (imageIdentifiers: string[]) => {
        const sortedImages = imageIdentifiers.map(
            (identifier) => valueExtern.find((v) => v.asset.__identifier === identifier)!
        )
        commit(sortedImages)
    }

    const handleSelectImage = (identifier: string) => {
        setSelectedImageIdentifier(identifier)
        renderSecondaryInspector(undefined, undefined)
    }

    return (
        <EditorContainer>
            <PreviewGrid
                images={images}
                selectedImageIdentifier={selectedImageIdentifier}
                onSelect={handleSelectImage}
                onEmptyPreviewClick={handleOpenMediaSelection}
                onSort={handleImageSorting}
                changed={highlight}
            />
            <MetaDataInput
                alt={selectedImage?.alt}
                title={selectedImage?.title}
                selectedImageIdentifier={selectedImageIdentifier}
                onAltChange={handleAltChange}
                onTitleChange={handleTitleChange}
            />
            <ControlBar
                cropEnabled={Boolean(editorOptions?.features?.crop)}
                selectedImageIdentifier={selectedImageIdentifier}
                onOpenImageSelector={handleOpenMediaSelection}
                onOpenImageCropper={handleOpenImageCropper}
                onDelete={handleDelete}
            />
        </EditorContainer>
    )
}
