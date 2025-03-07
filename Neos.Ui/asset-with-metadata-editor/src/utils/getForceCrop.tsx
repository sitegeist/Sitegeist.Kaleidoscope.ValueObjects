import { EditorOptions, ImageMetadata } from '../types'
import { getCropAdjustments } from './getCropAdjustments'

export const getForceCrop = (imageMetadata: ImageMetadata, cropOptions: EditorOptions['crop']) => {
    const forcedAspectRatio =
        (cropOptions?.aspectRatio.locked?.width ?? 0) / (cropOptions?.aspectRatio.locked?.height ?? 0)

    const imageAspectRatio = imageMetadata.originalDimensions.width / imageMetadata.originalDimensions.height

    if (imageAspectRatio === forcedAspectRatio) return

    if (forcedAspectRatio > imageAspectRatio) {
        const aspectWidth = imageMetadata.originalDimensions.width
        const aspectHeight = Math.floor(aspectWidth / forcedAspectRatio)
        const x = 0
        const y = getAxisInPercent(aspectHeight, imageMetadata.originalDimensions.height)

        const { changed, cropAdjustments } = getCropAdjustments(imageMetadata, {
            x,
            y,
            width: 100,
            height: (aspectHeight / imageMetadata.originalDimensions.height) * 100,
            aspect: forcedAspectRatio,
        })

        if (!changed) return
        return cropAdjustments
    }

    const aspectHeight = imageMetadata.originalDimensions.height
    const aspectWidth = Math.floor(aspectHeight * forcedAspectRatio)

    const x = getAxisInPercent(aspectWidth, imageMetadata.originalDimensions.width)
    const y = 0

    const { changed, cropAdjustments } = getCropAdjustments(imageMetadata, {
        x,
        y,
        width: (aspectWidth / imageMetadata.originalDimensions.width) * 100,
        height: 100,
        aspect: forcedAspectRatio,
    })

    if (!changed) return
    return cropAdjustments
}

const getAxisInPercent = (aspectValue: number, originalValue: number) => {
    return (Math.floor((originalValue - aspectValue) / 2) / originalValue) * 100
}
