<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\Migration\Transformations;

use Neos\ContentRepository\Domain\Model\NodeData;
use Neos\ContentRepository\Migration\Transformations\AbstractTransformation;
use Neos\Media\Domain\Model\AssetInterface;
use Neos\Media\Domain\Model\Image;
use Neos\Media\Domain\Model\ImageInterface;
use Neos\Media\Domain\Model\ImageVariant;
use Sitegeist\Kaleidoscope\ValueObjects\ImageAssetProxy;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy;

class ImageToImageSourceProxy extends AbstractTransformation
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
                $sourceValue instanceof Image || $sourceValue instanceof ImageVariant || $sourceValue === ''
            ) {
                return true;
            }
        }
        return false;
    }

    /**
     * Change the property on the given node.
     *
     * from: Neos\\Media\\Domain\\Model\\Image
     * to: Sitegeist\\Kaleidoscope\\ValueObjects\\ImageSourceProxy
     */
    public function execute(NodeData $node): NodeData
    {
        /**
         * @var Image|ImageVariant|string $sourceValue
         */
        $sourceValue = $node->getProperty($this->sourceProperty);
        if ($sourceValue === '') {
            $node->setProperty($this->targetProperty, null);
        } elseif ($sourceValue instanceof Image || $sourceValue instanceof ImageVariant) {
            $alt = $this->altProperty ? $node->getProperty($this->altProperty) : "";
            $title = $this->titleProperty ? $node->getProperty($this->titleProperty) : "";
            $targetValue = new ImageSourceProxy(ImageAssetProxy::fromAsset($sourceValue), $alt, $title);
            $node->setProperty($this->targetProperty, $targetValue);
        }
        return $node;
    }
}
