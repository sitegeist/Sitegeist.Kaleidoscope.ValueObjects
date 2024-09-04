<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Neos\Flow\Persistence\PersistenceManagerInterface;
use Neos\Utility\TypeHandling;

trait SerializeItemTrait
{
    protected static function serializeItem(AssetWithMetadata $source, PersistenceManagerInterface $persistenceManager): array
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
