import { SynchronousRegistry } from '@neos-project/neos-ui-extensibility'
import * as React from 'react'

import { CollectionEditor } from './editors/collectionEditor'
import { Editor } from './editors/editor'
import { endpoints } from './neos-bridge/backend'
import { IGlobalRegistry } from './neos-bridge/globalRegistry'
import { AssetWithMeta, ImageMetadata } from './types'
import { HOOK_BEFORE_SAVE } from './utils/constants'

export function registerAssetWithMetadataEditor(globalRegistry: IGlobalRegistry): void {
    const inspectorRegistry = globalRegistry.get('inspector')
    const saveHooksRegistry = globalRegistry.get('inspector')?.get('saveHooks') as any
    const { createImageVariant } = endpoints()

    if (!inspectorRegistry) {
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Could not find inspector registry.')
        console.warn(
            '[Sitegeist.Kaleidoscope.ValueObjects]: Skipping registration of AssetWithMetadataEditor...'
        )
        return
    }

    const editorsRegistry = inspectorRegistry.get<SynchronousRegistry<any>>('editors')
    if (!editorsRegistry) {
        console.warn(
            '[Sitegeist.Kaleidoscope.ValueObjects]: Could not find inspector editors registry.'
        )
        console.warn(
            '[Sitegeist.Kaleidoscope.ValueObjects]: Skipping registration of AssetWithMetadataEditor...'
        )
        return
    }

    editorsRegistry.set(
        'Sitegeist.Kaleidoscope.ValueObjects/Inspector/Editors/AssetWithMetadataEditor',
        {
            component: (props: any) => {
                console.log('Editor Props', props)
                return <Editor {...props} />
            },
        }
    )

    editorsRegistry.set(
        'Sitegeist.Kaleidoscope.ValueObjects/Inspector/Editors/AssetWithMetadataCollectionEditor',
        {
            component: (props: any) => {
                console.log('Editor Props', props)
                return <CollectionEditor {...props} />
            },
        }
    )

    saveHooksRegistry?.set(
        HOOK_BEFORE_SAVE,
        async (value: AssetWithMeta, options: ImageMetadata): Promise<AssetWithMeta> => {
            const { __identity, adjustments } = options.object

            if (!__identity) throw new Error('Received malformed originalImageUuid.')
            if (!adjustments) throw new Error('Received malformed adjustments.')

            const imageVariant = await createImageVariant(__identity, adjustments)

            return { ...value, asset: imageVariant }
        }
    )
}
