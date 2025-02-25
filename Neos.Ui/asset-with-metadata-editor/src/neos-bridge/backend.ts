import backend from '@neos-project/neos-ui-backend-connector'

import { ImageMetadata } from '../types'

export const endpoints = () => {
    console.log('backend', backend.get)
    return backend.get().endpoints as {
        loadImageMetadata: (assetIdentifier: string) => Promise<ImageMetadata>
    }
}
