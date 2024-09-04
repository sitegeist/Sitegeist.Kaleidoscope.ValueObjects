<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\TypeConverter;

use Neos\Media\Domain\Model\ImageInterface;
use Sitegeist\Kaleidoscope\ValueObjects\AssetWithMetadata;

trait arrayToItemTrait
{
    protected function arrayToItem(array $source): ?AssetWithMetadata
    {
        if (is_array($source) && array_key_exists('asset', $source)) {
            $asset = $source['asset'];
            if ($asset instanceof ImageInterface) {
                return new AssetWithMetadata(
                    $asset,
                    $source['alt'] ?? '',
                    $source['title'] ?? '',
                );
            }
        }
        return null;
    }
}
