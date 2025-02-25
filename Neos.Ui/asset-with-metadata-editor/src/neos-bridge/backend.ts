import backend from '@neos-project/neos-ui-backend-connector'

export const endpoints = () =>
    backend.get().endpoints as {
        loadImageMetadata: (assetIdentifier: string) => Promise<any>
    }
