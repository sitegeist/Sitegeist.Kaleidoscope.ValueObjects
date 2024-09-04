<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\TypeConverter;

use Neos\Flow\Persistence\PersistenceManagerInterface;
use Neos\Flow\Property\PropertyMappingConfigurationInterface;
use Neos\Flow\Property\TypeConverter\AbstractTypeConverter;
use Sitegeist\Kaleidoscope\ValueObjects\AssetWithMetadata;

class AssetWithMetadataSerializer extends AbstractTypeConverter
{
    use itemToArrayTrait;

    /**

    protected $sourceTypes = [AssetWithMetadata::class];

    /**
     * The target type this converter can convert to.
     *
     * @var string
     * @api
     */
    protected $targetType = 'array';

    public function __construct(
        private readonly PersistenceManagerInterface $persistenceManager
    ) {
    }

    public function canConvertFrom($source, $targetType)
    {
        return ($source instanceof AssetWithMetadata);
    }

    public function convertFrom($source, $targetType, array $convertedChildProperties = [], PropertyMappingConfigurationInterface $configuration = null)
    {
        return $this->itemToArray($source, $this->persistenceManager);
    }
}
