<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\TypeConverter;

use Neos\Flow\Persistence\PersistenceManagerInterface;
use Neos\Flow\Property\PropertyMappingConfigurationInterface;
use Neos\Flow\Property\TypeConverter\AbstractTypeConverter;
use Sitegeist\Kaleidoscope\ValueObjects\AssetWithMetadata;
use Sitegeist\Kaleidoscope\ValueObjects\AssetWithMetadataCollection;

class AssetWithMetadataCollectionSerializer extends AbstractTypeConverter
{
    use itemToArrayTrait;

    /**
     * The source types this converter can convert.
     *
     * @var array<string>
     * @api
     */
    protected $sourceTypes = [AssetWithMetadataCollection::class];

    /**
     * The target type this converter can convert to.
     *
     * @var string
     * @api
     */
    protected $targetType = 'array';

    public function __construct(
        private readonly PersistenceManagerInterface $persistenceManager,
    ) {
    }

    public function canConvertFrom($source, $targetType)
    {
        return ($source instanceof AssetWithMetadataCollection);
    }

    public function convertFrom($source, $targetType, array $convertedChildProperties = [], PropertyMappingConfigurationInterface $configuration = null)
    {
        if ($source instanceof AssetWithMetadataCollection) {
            return array_map(
                fn(AssetWithMetadata $item) => $this->itemToArray($item, $this->persistenceManager),
                $source->items
            );
        }
        throw new \Exception('a WTF');
    }
}
