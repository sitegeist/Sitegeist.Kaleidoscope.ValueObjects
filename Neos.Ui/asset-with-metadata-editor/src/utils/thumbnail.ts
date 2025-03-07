import { ImageMetadata } from '../types'
import { Image } from './image'

const DEFAULT_OFFSET = { x: 0, y: 0 }

export class Thumbnail {
    image: Image
    width: number
    height: number

    constructor(image: ImageMetadata, width: number, height: number) {
        this.image = new Image(image)
        this.width = width
        this.height = height
    }

    static fromImageData = (imageData: ImageMetadata, width: number, height: number) =>
        new Thumbnail(imageData, width, height)

    get uri() {
        const { previewUri } = this.image
        return previewUri
    }

    get scalingFactor() {
        const { image } = this
        const { width, height } = image.previewCropAdjustment.orSome(image.previewDimensions)
        const byWidth = this.width / width
        const byHeight = this.height / height

        return Math.min(byWidth, byHeight)
    }

    get dimensions() {
        const { image, scalingFactor } = this
        const { width, height } = image.previewDimensions

        return {
            width: width * scalingFactor,
            height: height * scalingFactor,
        }
    }

    get cropDimensions() {
        const { image, scalingFactor } = this
        const { width, height } = image.previewCropAdjustment.orSome(image.previewDimensions)

        return {
            width: width * scalingFactor,
            height: height * scalingFactor,
        }
    }

    get styles() {
        const { dimensions, cropDimensions, scalingFactor } = this
        const { x, y } = this.image.previewCropAdjustment.orSome(DEFAULT_OFFSET)

        return {
            thumbnail: {
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
                left: `-${x * scalingFactor}px`,
                top: `-${y * scalingFactor}px`,
            },
            cropArea: {
                width: `${cropDimensions.width}px`,
                height: `${cropDimensions.height}px`,
            },
        }
    }
}
