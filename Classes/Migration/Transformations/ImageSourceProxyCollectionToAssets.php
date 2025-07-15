<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\Migration\Transformations;

use Neos\ContentRepository\Domain\Model\NodeData;
use Neos\ContentRepository\Migration\Transformations\AbstractTransformation;
use Neos\Flow\Annotations as Flow;
use Sitegeist\Kaleidoscope\ValueObjects\Factory\ImageAssetFactory;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxyCollection;

class ImageSourceProxyCollectionToAssets extends AbstractTransformation
{
    /**
     * @var string
     */
    protected $sourceProperty;

    /**
     * @var string
     */
    protected $targetProperty;

    #[Flow\Inject]
    protected ImageAssetFactory $imageAssetFactory;

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
            if ($sourceValue instanceof ImageSourceProxyCollection) {
                return true;
            }
        }
        return false;
    }

    /**
     * from: Sitegeist\\Kaleidoscope\\ValueObjects\\ImageSourceProxyCollection
     * to: Asset[]
     */
    public function execute(NodeData $node): NodeData
    {
        /**
         * @var ImageSourceProxyCollection $sourceValue
         */
        $sourceValue = $node->getProperty($this->sourceProperty);
        $targetValue = array_map(
            function (ImageSourceProxy $item) {
                return $this->imageAssetFactory->tryCreateFromProxy($item->asset);
            },
            $sourceValue->items
        );
        $node->setProperty($this->targetProperty, $targetValue);
        return $node;
    }
}
