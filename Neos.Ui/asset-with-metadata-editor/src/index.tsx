import { SynchronousRegistry } from '@neos-project/neos-ui-extensibility'
import * as React from 'react'

import { CollectionEditor } from './editors/collectionEditor'
import { Editor } from './editors/editor'
import { endpoints } from './neos-bridge/backend'
import { IGlobalRegistry } from './neos-bridge/globalRegistry'
import { AssetWithMeta, ImageMetadata } from './types'
import { HOOK_BEFORE_SAVE, HOOK_BEFORE_SAVE_COLLECTION } from './utils/constants'

export function registerAssetWithMetadataEditor(globalRegistry: IGlobalRegistry): void {
    const inspectorRegistry = globalRegistry.get('inspector')
    const saveHooksRegistry = globalRegistry.get('inspector')?.get('saveHooks') as any

    if (!inspectorRegistry) {
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Could not find inspector registry.')
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Skipping registration of AssetWithMetadataEditor...')
        return
    }

    const editorsRegistry = inspectorRegistry.get<SynchronousRegistry<any>>('editors')
    if (!editorsRegistry) {
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Could not find inspector editors registry.')
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Skipping registration of AssetWithMetadataEditor...')
        return
    }

    editorsRegistry.set('Sitegeist.Kaleidoscope.ValueObjects/Inspector/Editors/AssetWithMetadataEditor', {
        component: (props: any) => {
            const { value, ...rest } = props

            return <Editor {...rest} value={!value || Object.keys(value).length === 0 ? undefined : value} />
        },
    })

    editorsRegistry.set('Sitegeist.Kaleidoscope.ValueObjects/Inspector/Editors/AssetWithMetadataCollectionEditor', {
        component: (props: any) => {
            const { value, ...rest } = props

            return <CollectionEditor {...rest} value={!value || !Array.isArray(value) ? [] : value} />
        },
    })

    saveHooksRegistry?.set(HOOK_BEFORE_SAVE, createImageVariant)

    saveHooksRegistry?.set(
        HOOK_BEFORE_SAVE_COLLECTION,
        async (values: AssetWithMeta[], options: ImageMetadata[]): Promise<AssetWithMeta[]> => {
            const promises = options.map(async (option) => {
                const value = values.find((value) => value.asset.__identifier === option.object.__identity)
                if (!value) return Promise.reject(new Error('Received malformed value.'))

                const imageVariant = await createImageVariant(value, option)
                return { originalIdentifier: value.asset.__identifier, imageVariant }
            })

            const results = await Promise.all(promises)

            return values.map((v) => {
                const imageVariant = results.find((r) => r.originalIdentifier === v.asset.__identifier)
                if (imageVariant) return imageVariant.imageVariant
                return v
            })
        }
    )
}

const createImageVariant = (value: AssetWithMeta, options: ImageMetadata) => {
    const { __identity, adjustments, originalAsset } = options.object

    const assetId = originalAsset ? originalAsset.__identity : __identity
    if (!assetId) return Promise.reject(new Error('Received malformed originalImageUuid.'))
    if (!adjustments) return Promise.reject(new Error('Received malformed adjustments.'))

    return getImageVariant(assetId, adjustments, value)
}

const getImageVariant = async (
    assetId: string,
    adjustments: ImageMetadata['object']['adjustments'],
    value: AssetWithMeta
) => {
    const { createImageVariant } = endpoints()
    const imageVariant = await createImageVariant(assetId, adjustments)

    return {
        ...value,
        asset: {
            __identifier: imageVariant.__identity,
            __flow_object_type: imageVariant.__type,
        },
    }
}
