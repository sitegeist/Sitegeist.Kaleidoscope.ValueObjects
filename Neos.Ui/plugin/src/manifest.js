import manifest from '@neos-project/neos-ui-extensibility';


import { registerAssetWithMetadataEditor } from '@sitegeist/kaleidoscope-asset-with-metadata-editor';


manifest('@sitegeist/kaleidoscope-plugin', {}, (globalRegistry, {store, configuration, routes}) => {
    const neosContextProperties = {globalRegistry, store, configuration, routes};

    registerAssetWithMetadataEditor(neosContextProperties, editor);
});
