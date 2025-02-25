import { useEffect, useState } from 'react'

import { endpoints } from '../neos-bridge/backend'

const { loadImageMetadata } = endpoints()

export const useImageMetadata = (assetIdentifier?: string) => {
    const [imageMetadata, setImageMetadata] = useState<any | undefined>()

    useEffect(() => {
        if (!assetIdentifier) return

        const getImageMetadata = async () => {
            const image = await loadImageMetadata(assetIdentifier)
            setImageMetadata(image)
        }

        getImageMetadata()
    }, [assetIdentifier])

    return imageMetadata
}
