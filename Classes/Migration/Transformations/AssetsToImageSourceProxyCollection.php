<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\Migration\Transformations;

use Neos\ContentRepository\Domain\Model\NodeData;
use Neos\ContentRepository\Migration\Transformations\AbstractTransformation;
use Neos\Media\Domain\Model\AssetInterface;
use Neos\Media\Domain\Model\Image;
use Neos\Media\Domain\Model\ImageVariant;
use Sitegeist\Kaleidoscope\ValueObjects\ImageAssetProxy;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxyCollection;

class AssetsToImageSourceProxyCollection extends AbstractTransformation
{
    /**
     * @var string
     */
    protected $sourceProperty;

    /**
     * @var string
     */
    protected $targetProperty;

    public function setSourceProperty(string $sourceProperty): void
    {
        $this->sourceProperty = $sourceProperty;
    }

    public function setTargetProperty(string $targetProperty): void
    {
        $this->targetProperty = $targetProperty;
    }

    /**
     * If the given node has the property this transformation should work on, this
     * returns true.
     */
    public function isTransformable(NodeData $node): bool
    {
        if (
            $node->hasProperty($this->sourceProperty)
            && $node->hasProperty($this->targetProperty)
        ) {
            $sourceValue = $node->getProperty($this->sourceProperty);
            if (is_array($sourceValue)) {
                foreach ($sourceValue as $sourceItem) {
                    if (!$sourceItem instanceof AssetInterface) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }


    /**
     * from: Asset[]
     * to: Sitegeist\\Kaleidoscope\\ValueObjects\\ImageSourceProxyCollection
     **/
    public function execute(NodeData $node): NodeData
    {
        /**
         * @var array<Image|ImageVariant> $sourceValue
         */
        $sourceValue = $node->getProperty($this->sourceProperty);
        $targetValue = new ImageSourceProxyCollection(
            ...array_map(
                fn(Image|ImageVariant $asset) => new ImageSourceProxy(ImageAssetProxy::fromAsset($asset), "", ""),
                $sourceValue
            )
        );
        $node->setProperty($this->targetProperty, $targetValue);
        return $node;
    }
}
