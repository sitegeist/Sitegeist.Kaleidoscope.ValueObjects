import manifest from '@neos-project/neos-ui-extensibility'
import { registerAssetWithMetadataEditor } from '@sitegeist/kaleidoscope-valueobjects-asset-with-metadata-editor'

manifest(
    '@sitegeist/kaleidoscope-valueobjects-plugin',
    {},
    (globalRegistry, { store, configuration, routes }) => {
        const neosContextProperties = { globalRegistry, store, configuration, routes }

        registerAssetWithMetadataEditor(neosContextProperties, editor)
    }
)
