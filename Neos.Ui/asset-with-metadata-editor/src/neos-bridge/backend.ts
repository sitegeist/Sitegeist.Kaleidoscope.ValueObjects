import backend from '@neos-project/neos-ui-backend-connector'

import { ImageMetadata } from '../types'

export const endpoints = () => {
    console.log('backend', backend.get)

    const test = backend.get().endpoints as {
        loadImageMetadata: (assetIdentifier: string) => Promise<ImageMetadata>
    }

    console.log('endpoints', test)

    return test
}
