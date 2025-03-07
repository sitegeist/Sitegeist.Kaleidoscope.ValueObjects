import { endpoints } from '../neos-bridge/backend'

export const getImageMetaData = async (assetIdentifier: string) => {
    const { loadImageMetadata } = endpoints()
    return await loadImageMetadata(assetIdentifier)
}
