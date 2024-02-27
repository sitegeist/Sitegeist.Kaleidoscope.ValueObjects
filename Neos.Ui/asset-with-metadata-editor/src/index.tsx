import { SynchronousRegistry } from '@neos-project/neos-ui-extensibility'
import * as React from 'react'

import { IGlobalRegistry } from './globalRegistry'

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
            component: () => <div>AssetWithMetadata</div>,
        }
    )
}
