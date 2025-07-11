<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\TypeConverter;

use Neos\Flow\Property\PropertyMappingConfigurationInterface;
use Neos\Flow\Property\TypeConverter\AbstractTypeConverter;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy;

class ImageSourceProxyArrayPresenter extends AbstractTypeConverter
{
    /**
     * @var array<string>
     */
    protected $sourceTypes = [ImageSourceProxy::class];

    /**
     * @var string
     */
    protected $targetType = 'array';

    /**
     * @var integer
     */
    protected $priority = 0;


    /**
     * If $source has an identity, we have a persisted Image, and therefore
     * this type converter should withdraw and let the PersistedObjectConverter kick in.
     *
     * @param mixed $source The source for the to-build Image
     * @param string $targetType Should always be 'string'
     * @return boolean
     */
    public function canConvertFrom($source, $targetType): bool
    {
        return $source instanceof ImageSourceProxy && $targetType === 'array';
    }

    /**
     * Convert all properties in the source array
     *
     * @param mixed $source
     * @return array{}
     */
    public function getSourceChildPropertiesToBeConverted($source): array
    {
        return [];
    }

    /**
     * Convert an object from \Neos\Media\Domain\Model\ImageInterface to a json representation
     *
     * @param ImageSourceProxy|mixed $source
     * @param string $targetType must be 'array'
     * @param mixed[] $convertedChildProperties
     * @param PropertyMappingConfigurationInterface $configuration
     * @return mixed[]
     */
    public function convertFrom($source, $targetType, array $convertedChildProperties = [], ?PropertyMappingConfigurationInterface $configuration = null)
    {
        if ($source instanceof ImageSourceProxy) {
            return $source->jsonSerialize();
        }

        throw new \Exception(sprintf(
            'ImageSourceProxyArrayPresenter can only convert ImageSourceProxy "%s" was given.',
            get_debug_type($source)
        ));
    }
}
