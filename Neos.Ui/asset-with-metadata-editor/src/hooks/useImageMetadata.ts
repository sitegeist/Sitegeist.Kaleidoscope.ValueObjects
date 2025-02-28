import { useEffect, useState } from 'react'

import { ImageMetadata } from '../types'
import { getImageMetaData } from '../utils/getImageMetaData'

export const useImageMetadata = (assetIdentifier?: string) => {
    const [imageMetadata, setImageMetadata] = useState<ImageMetadata>()

    useEffect(() => {
        if (!assetIdentifier) return

        const fn = async () => {
            const image = await getImageMetaData(assetIdentifier)
            setImageMetadata(image)
        }

        fn()
    }, [assetIdentifier])

    return imageMetadata
}
