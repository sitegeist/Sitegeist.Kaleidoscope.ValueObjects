import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { ControlBar } from '../components/ControlBar'
import { EditorContainer } from '../components/editorContainer'
import { MetaDataInput } from '../components/metaDataInput'
import { PreviewGrid } from '../components/previewGrid'
import { useImageMetadataCollection } from '../hooks/useImageMetaDataCollection'
import { AssetWithMeta, CropArea, Props } from '../types'
import { MEDIA_TYPE_IMAGE } from '../utils/constants'
import { getCropAdjustments } from '../utils/getCropAdjustments'
import { Image } from '../utils/image'

export const CollectionEditor = ({
    value: valueExtern = [],
    neos: { globalRegistry },
    renderSecondaryInspector,
    options: editorOptions,
    commit,
}: Props<AssetWithMeta[]>) => {
    const imagesIdentifiers = useMemo(() => {
        return valueExtern.map((v) => v.asset.__identifier)
    }, [valueExtern])

    const imageMetadataCollection = useImageMetadataCollection(imagesIdentifiers)
    const valueRef = useRef<AssetWithMeta[]>(valueExtern)
    const [selectedImageIdentifier, setSelectedImageIdentifier] = useState<string>(
        valueExtern[0]?.asset.__identifier
    )

    const selectedImage = valueExtern.find((v) => v.asset.__identifier === selectedImageIdentifier)

    useEffect(() => {
        valueRef.current = valueExtern
    }, [valueExtern])

    const getImageMetadata = useCallback(
        (assetIdentifier: string) => {
            return imageMetadataCollection.find(
                (image) => image.object.__identity === assetIdentifier
            )
        },
        [imageMetadataCollection]
    )

    const handleDelete = () => {
        if (!selectedImageIdentifier) return

        const filteredValues = valueExtern.filter(
            (v) => v.asset.__identifier !== selectedImageIdentifier
        )
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

    //todo: handle crop for multiple images
    const handleMediaCrop = (cropArea: CropArea) => {
        if (!selectedImageIdentifier) return

        const imageMetadata = getImageMetadata(selectedImageIdentifier)
        if (!imageMetadata) return

        const { changed, cropAdjustments } = getCropAdjustments(imageMetadata, cropArea)
        if (!changed) return

        commit(valueExtern, cropAdjustments)
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

    return (
        <EditorContainer>
            <PreviewGrid
                images={images}
                selectedImageIdentifier={selectedImageIdentifier}
                onSelect={setSelectedImageIdentifier}
                onEmptyPreviewClick={handleOpenMediaSelection}
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
