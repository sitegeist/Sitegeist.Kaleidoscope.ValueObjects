<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\TypeConverter;

use Neos\Flow\Property\PropertyMappingConfigurationInterface;
use Neos\Flow\Property\TypeConverter\AbstractTypeConverter;
use Sitegeist\Kaleidoscope\ValueObjects\AssetWithMetadata;

class AssetWithMetadataConverter extends AbstractTypeConverter
{
    use arrayToItemTrait;

    /**
     * The source types this converter can convert.
     *
     * @var array<string>
     * @api
     */
    protected $sourceTypes = ['array'];

    /**
     * The target type this converter can convert to.
     *
     * @var string
     * @api
     */
    protected $targetType = AssetWithMetadata::class;

    public function __construct(
    ) {
    }

    public function canConvertFrom($source, $targetType)
    {
        return is_array($source);
    }

    public function convertFrom($source, $targetType, array $convertedChildProperties = [], PropertyMappingConfigurationInterface $configuration = null)
    {
        if (is_array($source)) {
            $item = $this->arrayToItem($source);
            if ($item instanceof AssetWithMetadata) {
                return $item;
            }
        }

        if ($source instanceof AssetWithMetadata) {
            return $source;
        }

        throw new \Exception('b WTF');
    }
}
