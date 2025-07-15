<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\Migration\Transformations;

use Imagine\Gd\Image;
use Neos\ContentRepository\Domain\Model\NodeData;
use Neos\ContentRepository\Migration\Transformations\AbstractTransformation;
use Neos\Media\Domain\Model\AssetInterface;
use Sitegeist\Kaleidoscope\ValueObjects\Factory\ImageAssetFactory;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy;
use Neos\Flow\Annotations as Flow;

class ImageSourceProxyToImage extends AbstractTransformation
{
    /**
     * @var string
     */
    protected $sourceProperty;

    /**
     * @var string
     */
    protected $targetProperty;

    /**
     * @var null|string
     */
    protected $titleProperty = null;

    /**
     * @var null|string
     */
    protected $altProperty = null;

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

    public function setAltProperty(?string $altProperty): void
    {
        $this->altProperty = $altProperty;
    }

    public function setTitleProperty(?string $titleProperty): void
    {
        $this->titleProperty = $titleProperty;
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
            && ($this->altProperty === null || $node->hasProperty($this->altProperty))
            && ($this->titleProperty === null || $node->hasProperty($this->titleProperty))
        ) {
            $sourceValue = $node->getProperty($this->sourceProperty);
            if (
                $sourceValue instanceof ImageSourceProxy
            ) {
                return true;
            }
        }
        return false;
    }

    /**
     * Change the property on the given node.
     *
     * from: Sitegeist\\Kaleidoscope\\ValueObjects\\ImageSourceProxy
     * to: Neos\\Media\\Domain\\Model\\Image
     */
    public function execute(NodeData $node): NodeData
    {
        /**
         * @var ImageSourceProxy $sourceValue
         */
        $sourceValue = $node->getProperty($this->sourceProperty);
        if ($this->altProperty) {
            $node->setProperty($this->altProperty, $sourceValue->alt);
        }
        if ($this->titleProperty) {
            $node->setProperty($this->titleProperty, $sourceValue->title);
        }
        $targetValue = $this->imageAssetFactory->tryCreateFromProxy($sourceValue->asset);
        $node->setProperty($this->targetProperty, $targetValue);
        return $node;
    }
}
