<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Doctrine\Persistence\Proxy;
use Neos\Flow\Persistence\PersistenceManagerInterface;
use Neos\Media\Domain\Model\ImageInterface;
use Sitegeist\Kaleidoscope\ValueObjects\AssetWithMetadata;

trait UnserializeItemTrait
{
    protected static function unserializeItem(array $source, PersistenceManagerInterface $persistenceManager): ?AssetWithMetadata
    {
        $asset = $source['asset'] ?? null;
        if (is_array($asset)
            && array_key_exists('__flow_object_type', $asset)
            && (array_key_exists('__identifier', $asset) || array_key_exists('__identity', $asset))
        ) {
            $asset = $persistenceManager->getObjectByIdentifier($asset['__identifier'] ?? $asset['__identity'], $asset['__flow_object_type']);
        }

        if ($asset instanceof ImageInterface) {
            return new AssetWithMetadata(
                $asset,
                $source['alt'] ?? '',
                $source['title'] ?? '',
            );
        }

        throw new \Exception("unexpected asset type: " . get_debug_type($asset) . '  ' . json_encode($asset) . "unexpected asset type: " . get_debug_type($source) . '  ' . json_encode($source));
    }
}
