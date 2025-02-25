import { useEffect, useState } from 'react'

import { endpoints } from '../neos-bridge/backend'
import { ImageMetadata } from '../types'

export const useImageMetadata = (assetIdentifier?: string) => {
    const [imageMetadata, setImageMetadata] = useState<ImageMetadata>()

    useEffect(() => {
        if (!assetIdentifier) return
        const { loadImageMetadata } = endpoints()

        const getImageMetadata = async () => {
            const image = await loadImageMetadata(assetIdentifier)
            setImageMetadata(image)
        }

        getImageMetadata()
    }, [assetIdentifier])

    return imageMetadata
}
