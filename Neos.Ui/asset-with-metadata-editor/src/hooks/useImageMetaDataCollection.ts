import { useEffect, useState } from 'react'

import { ImageMetadata } from '../types'
import { getImageMetaData } from '../utils/getImageMetaData'

const metadataCache = new Map<string, ImageMetadata>()

export const useImageMetadataCollection = (assetIdentifiers: string[]) => {
    const [imageMetadata, setImageMetadata] = useState<ImageMetadata[]>([])

    useEffect(() => {
        if (assetIdentifiers.length === 0) return

        const cachedMetadata = assetIdentifiers
            .filter((assetIdentifier) => metadataCache.has(assetIdentifier))
            .map((assetIdentifier) => metadataCache.get(assetIdentifier)!)

        const uncachedMetadataIdentifiers = assetIdentifiers.filter(
            (assetIdentifier) => !metadataCache.has(assetIdentifier)
        )

        const imageMetadataPromises = uncachedMetadataIdentifiers.map((assetIdentifier) =>
            getImageMetaData(assetIdentifier)
        )

        const fn = async () => {
            const image = await Promise.all(imageMetadataPromises)
            image.forEach((metadata) => metadataCache.set(metadata.object.__identity, metadata))

            setImageMetadata([...cachedMetadata, ...image])
        }

        fn()
    }, [assetIdentifiers])

    return imageMetadata
}
