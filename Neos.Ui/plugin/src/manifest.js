import manifest from '@neos-project/neos-ui-extensibility'
import { registerAssetWithMetadataEditor } from '@sitegeist/kaleidoscope-valueobjects-asset-with-metadata-editor'

manifest('@sitegeist/kaleidoscope-valueobjects-plugin', {}, (globalRegistry) => {
    registerAssetWithMetadataEditor(globalRegistry)
})
