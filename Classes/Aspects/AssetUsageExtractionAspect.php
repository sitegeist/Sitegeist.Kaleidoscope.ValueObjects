<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\Aspects;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Aop\JoinPointInterface;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxyCollection;

#[Flow\Aspect()]
class AssetUsageExtractionAspect
{
    /**
     * !!! This is only supported in Neos 9 but should have no adverse effects in Neos 8 !!!
     * @see \Neos\Neos\AssetUsage\Service\AssetUsageIndexingService::extractAssetIds
     * @return string[]
     */
    #[Flow\Around('method(Neos\Neos\AssetUsage\Service\AssetUsageIndexingService->extractAssetIds())')]
    public function extractAssetIdsFromValueObjects(JoinPointInterface $joinPoint): array
    {
        $nodePropertyValue = $joinPoint->getMethodArgument('value');

        if ($nodePropertyValue instanceof ImageSourceProxy) {
            return [$nodePropertyValue->asset->identifier];
        }
        if ($nodePropertyValue instanceof ImageSourceProxyCollection) {
            $result = [];
            foreach ($nodePropertyValue->items as $item) {
                if ($item instanceof ImageSourceProxy) {
                    $result[] = $item->asset->identifier;
                }
            }
            return $result;
        }

        return $joinPoint->getAdviceChain()->proceed($joinPoint);
    }
}
