import { Maybe } from 'monet'

import { ImageMetadata } from '../types'

const extractOriginalDimensions = (image: ImageMetadata) => ({
    width: image?.originalDimensions?.width,
    height: image?.originalDimensions?.height,
})

const extractPreviewDimensions = (image: ImageMetadata) => ({
    width: image?.previewDimensions?.width,
    height: image?.previewDimensions?.height,
})

export class Image {
    image: ImageMetadata

    constructor(image: ImageMetadata) {
        this.image = image
    }

    static fromImageData = (imageData: ImageMetadata) => new Image(imageData)

    get previewUri() {
        const { image } = this
        return image?.previewImageResourceUri
    }

    get previewScalingFactor() {
        const { image } = this
        return image?.previewDimensions?.width / image?.originalDimensions?.width
    }

    get dimensions() {
        const { image } = this
        return extractOriginalDimensions(image)
    }

    get aspectRatio() {
        const { width, height } = this.dimensions
        return width / height
    }

    get previewDimensions() {
        const { image } = this
        return extractPreviewDimensions(image)
    }

    get cropAdjustment() {
        const { image } = this
        return Maybe.fromNull(
            image?.object?.adjustments?.[
                'Neos\\Media\\Domain\\Model\\Adjustment\\CropImageAdjustment'
            ] ?? null
        )
    }

    get cropAspectRatio() {
        return this.cropAdjustment.map((c) => c.width / c.height)
    }

    get previewCropAdjustment() {
        const { cropAdjustment, previewScalingFactor } = this
        return cropAdjustment.map((cropAdjustment) =>
            Object.fromEntries(
                Object.entries(cropAdjustment).map(([key, value]) => [
                    key,
                    (value as number) * previewScalingFactor,
                ])
            )
        )
    }

    get resizeAdjustment() {
        const { image } = this
        return Maybe.fromNull(
            image?.object?.adjustments?.[
                'Neos\\Media\\Domain\\Model\\Adjustment\\ResizeImageAdjustment'
            ] ?? null
        )
    }

    get previewResizeAdjustment() {
        const { resizeAdjustment, previewScalingFactor } = this
        return resizeAdjustment.map((resizeAdjustment) =>
            Object.fromEntries(
                Object.entries(resizeAdjustment).map(([key, value]) => [
                    key,
                    (value as number) * previewScalingFactor,
                ])
            )
        )
    }
}
