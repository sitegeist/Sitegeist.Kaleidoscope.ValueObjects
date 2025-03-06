import { HOOK_BEFORE_SAVE, HOOK_BEFORE_SAVE_COLLECTION } from './utils/constants'

// Editor
export type Asset = {
    __identifier: string
    __flow_object_type: string
}

export type Meta = {
    title?: string
    alt?: string
}

export type AssetWithMeta = {
    asset: Asset
} & Meta

export type Props<T> = {
    identifier: string
    className: string
    value: T
    hooks: {
        [HOOK_BEFORE_SAVE]: ImageMetadata
        [HOOK_BEFORE_SAVE_COLLECTION]: ImageMetadata[]
    }
    highlight?: boolean
    options?: {
        placeholder: string
        disabled?: boolean
        threshold?: any
        constraints?: any
        features?: {
            crop?: boolean
        }
        crop?: {
            aspectRatio: {
                options?: any
                forceCrop?: boolean
                locked?: {
                    width?: number
                    height?: number
                }
            }
        }
    }
    editor: string
    renderSecondaryInspector: Function
    neos: {
        globalRegistry: any
    }
    commit: (value?: T | null | '', ...args: any[]) => void
}

export type Option = {
    dataType: string
    identifier: string
    label: string
    loaderUri: string
    preview: string
}

//Image

export type ImageMetadata = {
    mediaType: string
    object: {
        __identity: string
        __type: string
        adjustments: any
        originalAsset?: {
            __identity: string
        }
    }
    originalDimensions: {
        width: number
        height: number
        aspectRatio: number
    }
    originalImageResourceUri: string
    previewDimensions: {
        width: number
        height: number
    }
    previewImageResourceUri: string
}

export type CropArea = {
    x: number
    y: number
    width: number
    height: number
    aspect: number
}

//Neos Bridge

export type BackendEndpoints = {
    loadImageMetadata: (assetIdentifier: string) => Promise<ImageMetadata>
    createImageVariant: (
        uuidOfImage: string,
        image: ImageMetadata
    ) => Promise<{
        __identity: string
        __type: string
    }>
}
