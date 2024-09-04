<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\TypeConverter;

use Neos\Flow\Persistence\PersistenceManagerInterface;
use Neos\Utility\TypeHandling;
use Sitegeist\Kaleidoscope\ValueObjects\AssetWithMetadata;

trait itemToArrayTrait
{
    protected function itemToArray(AssetWithMetadata $source, PersistenceManagerInterface $persistenceManager): array
    {
        $assetClassName = TypeHandling::getTypeForValue($source->asset);
        $assetIdentifier = $persistenceManager->getIdentifierByObject($source->asset);
        return [
            'asset' => [
                '__flow_object_type' => $assetClassName,
                '__identifier' => $assetIdentifier
            ],
            'alt' => $source->alt,
            'title' => $source->title,
        ];
    }
}
