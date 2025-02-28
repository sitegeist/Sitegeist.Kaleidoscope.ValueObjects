import { CropArea, ImageMetadata } from '../types'
import { HOOK_BEFORE_SAVE } from './constants'

export const getCropAdjustments = (imageMetadata: ImageMetadata, cropArea: CropArea) => {
    if (!imageMetadata)
        return {
            changed: false,
            cropAdjustments: null,
        }

    const imageWidth = imageMetadata.originalDimensions.width
    const imageHeight = imageMetadata.originalDimensions.height

    const currentCropAdjustments =
        imageMetadata?.object?.adjustments?.[
            'Neos\\Media\\Domain\\Model\\Adjustment\\CropImageAdjustment'
        ]

    const nextCropAdjustments = {
        x: Math.round((cropArea.x / 100) * imageWidth),
        y: Math.round((cropArea.y / 100) * imageHeight),
        width: Math.round((cropArea.width / 100) * imageWidth),
        height: Math.round((cropArea.height / 100) * imageHeight),
    }
    const cropAdjustmentsHaveChanged =
        !currentCropAdjustments ||
        currentCropAdjustments.x !== nextCropAdjustments.x ||
        currentCropAdjustments.y !== nextCropAdjustments.y ||
        currentCropAdjustments.width !== nextCropAdjustments.width ||
        currentCropAdjustments.height !== nextCropAdjustments.height

    if (!cropAdjustmentsHaveChanged)
        return {
            changed: false,
            cropAdjustments: nextCropAdjustments,
        }

    const nextImage = {
        ...imageMetadata,
        object: {
            ...imageMetadata.object,
            adjustments: {
                ...imageMetadata.object?.adjustments,
                'Neos\\Media\\Domain\\Model\\Adjustment\\CropImageAdjustment': nextCropAdjustments,
            },
        },
    }

    return {
        changed: true,
        cropAdjustments: { [HOOK_BEFORE_SAVE]: nextImage },
    }
}
