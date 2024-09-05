<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Neos\Flow\Core\Bootstrap;
use Neos\Flow\Persistence\Doctrine\PersistenceManager;
use Neos\Flow\Persistence\PersistenceManagerInterface;
use Neos\Media\Domain\Model\ImageInterface;
use Neos\Utility\TypeHandling;

class ItemSerializationService
{
    private static ?PersistenceManagerInterface $persistenceManager = null;

    public static function serializeItem(AssetWithMetadata $source): array
    {
        $persistenceManager = self::getPersistenceManager();
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

    public static function unserializeItem(array $source): ?AssetWithMetadata
    {
        $asset = $source['asset'] ?? null;
        $persistenceManager = self::getPersistenceManager();
        if (is_array($asset)
            && array_key_exists('__flow_object_type', $asset)
            && (array_key_exists('__identifier', $asset) || array_key_exists('__identity', $asset))
        ) {
            $asset = $persistenceManager->getObjectByIdentifier(
                $asset['__identifier'] ?? $asset['__identity'],
                $asset['__flow_object_type'],
                true
            );
        }

        if ($asset instanceof ImageInterface) {
            return new AssetWithMetadata(
                $asset,
                $source['alt'] ?? '',
                $source['title'] ?? '',
            );
        }

        return null;
    }

    private static function getPersistenceManager(): PersistenceManager
    {
        if (self::$persistenceManager === null) {
            self::$persistenceManager = Bootstrap::$staticObjectManager->get(PersistenceManager::class);
        }
        return self::$persistenceManager;
    }
}
