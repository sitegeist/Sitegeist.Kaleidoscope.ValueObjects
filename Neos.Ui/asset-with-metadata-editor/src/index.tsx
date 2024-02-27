import * as React from 'react';

export function registerAssetWithMetadataEditor(
    neosContextProperties: any,
    editor: any
): void {
    const {globalRegistry} = neosContextProperties;
    const inspectorRegistry = globalRegistry.get('inspector');
    if (!inspectorRegistry) {
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Could not find inspector registry.');
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Skipping registration of AssetWithMetadataEditor...');
        return;
    }

    const editorsRegistry = inspectorRegistry.get('editors');
    if (!editorsRegistry) {
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Could not find inspector editors registry.');
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Skipping registration of AssetWithMetadataEditor...');
        return;
    }

    editorsRegistry.set('Sitegeist.Kaleidoscope.ValueObjects/Inspector/Editors/AssetWithMetadataEditor', {
        component: () => (
            <div>AssetWithMetadata</div>
        )
    });
}