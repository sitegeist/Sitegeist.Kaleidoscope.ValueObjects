<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\TypeConverter;

use Neos\Flow\Property\PropertyMappingConfigurationInterface;
use Neos\Flow\Property\TypeConverter\AbstractTypeConverter;
use Sitegeist\Kaleidoscope\ValueObjects\AssetWithMetadataCollection;

class AssetWithMetadataCollectionConverter extends AbstractTypeConverter
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
    protected $targetType = AssetWithMetadataCollection::class;

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
            return new AssetWithMetadataCollection( ...array_filter(array_map(
                function($itemArray) {
                    if (is_array($itemArray)) {
                        return $this->arrayToItem($itemArray);
                    }
                },
                $source
            )));
        }

        if ($source instanceof AssetWithMetadataCollection) {
            return $source;
        }

        throw new \Exception('WTF');
    }
}
