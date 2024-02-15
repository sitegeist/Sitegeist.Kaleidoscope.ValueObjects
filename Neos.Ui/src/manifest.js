import manifest from '@neos-project/neos-ui-extensibility';

import {AssetWithMetadata} from '../lib';

manifest('@sitegeist/papertiger-editors', {}, (globalRegistry) => {
	const editorsRegistry = globalRegistry.get('@sitegeist/inspectorgadget/editors');
	console.log('papertiger-editors');
	console.log(editorsRegistry);

	editorsRegistry.set(
		'Sitegeist\\Kaleidoscope\\ValueObjects\\AssetWithMetadata',
		AssetWithMetadata
	);
		console.log(editorsRegistry);

});
