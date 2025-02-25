import { SynchronousRegistry } from '@neos-project/neos-ui-extensibility'
import * as React from 'react'

import { CollectionEditor } from './editors/collectionEditor'
import { Editor } from './editors/editor'
import { IGlobalRegistry } from './neos-bridge/globalRegistry'

export function registerAssetWithMetadataEditor(globalRegistry: IGlobalRegistry): void {
    const inspectorRegistry = globalRegistry.get('inspector')
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
}
