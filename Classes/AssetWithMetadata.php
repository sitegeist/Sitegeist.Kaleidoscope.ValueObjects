<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Neos\Eel\ProtectedContextAwareInterface;
use Neos\Media\Domain\Model\ImageInterface;
use Sitegeist\Kaleidoscope\Domain\AssetImageSource;
use Sitegeist\Kaleidoscope\Domain\DummyImageSource;
use Sitegeist\Kaleidoscope\Domain\ImageSourceInterface;
use Neos\Flow\Annotations as Flow;
use Sitegeist\Kaleidoscope\Domain\ScalableImageSourceInterface;

#[Flow\Proxy(false)]
final class AssetWithMetadata implements \JsonSerializable, ScalableImageSourceInterface, ProtectedContextAwareInterface
{
    private ScalableImageSourceInterface $imageSourceRuntimeCache;

    public function __construct(
        public readonly ImageReference $image,
        public readonly string $alt = '',
        public readonly string $title = '',
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            ImageReference::fromArray($data['asset']),
            $data['alt'] ?? '',
            $data['title'] ?? '',
        );
    }

    public function jsonSerialize(): array
    {
        return [
            'asset' => $this->image->toArray(),
            'alt' => $this->alt,
            'title' => $this->title,
        ];
    }

    private function createAndCacheImageSource(): ScalableImageSourceInterface
    {
        if (isset($this->imageSourceRuntimeCache) === false) {
            $image = $this->image->toImageInterface();
            if ($image instanceof ImageInterface) {
                $this->imageSourceRuntimeCache = new AssetImageSource($image, $this->title, $this->alt);
            } else {
                $this->imageSourceRuntimeCache = new DummyImageSource(null, $this->title, $this->alt, 600, 400, null, null, '404 - not found');
            }
        }
        return $this->imageSourceRuntimeCache;
    }


    // proxy methods for ImageSourceInterface

    public function withAlt(?string $alt): ScalableImageSourceInterface
    {
        return $this->createAndCacheImageSource()->withAlt($alt);
    }

    public function withTitle(?string $title): ScalableImageSourceInterface
    {
        return $this->createAndCacheImageSource()->withTitle($title);
    }

    public function withDimensions(int $targetWidth, int $targetHeight): ScalableImageSourceInterface
    {
         return $this->createAndCacheImageSource()->withDimensions($targetWidth, $targetHeight);
    }

    public function withFormat(string $format): ScalableImageSourceInterface
    {
        return $this->createAndCacheImageSource()->withFormat($format);
    }

    public function withWidth(int $targetWidth, bool $preserveAspect = false): ScalableImageSourceInterface
    {
        return $this->createAndCacheImageSource()->withWidth($targetWidth, $preserveAspect);
    }

    public function withHeight(int $targetHeight, bool $preserveAspect = false): ScalableImageSourceInterface
    {
        return $this->createAndCacheImageSource()->withHeight($targetHeight, $preserveAspect);
    }

    public function withQuality(int $targetQuality): ScalableImageSourceInterface
    {
        return $this->createAndCacheImageSource()->withQuality($targetQuality);
    }

    public function withThumbnailPreset(string $format): ScalableImageSourceInterface
    {
        return $this->createAndCacheImageSource()->withThumbnailPreset($format);
    }

    public function withVariantPreset(string $presetIdentifier, string $presetVariantName): ScalableImageSourceInterface
    {
        return $this->createAndCacheImageSource()->withVariantPreset($presetIdentifier, $presetVariantName);
    }

    public function src(): string
    {
        return $this->createAndCacheImageSource()->src();
    }

    public function dataSrc(): string
    {
        return $this->createAndCacheImageSource()->dataSrc();
    }

    public function srcset(string $mediaDescriptors): string
    {
        return $this->createAndCacheImageSource()->srcset($mediaDescriptors);
    }

    public function title(): ?string
    {
        return $this->createAndCacheImageSource()->title();
    }

    public function alt(): ?string
    {
        return $this->createAndCacheImageSource()->alt();
    }

    public function width(): ?int
    {
        return $this->createAndCacheImageSource()->width();
    }

    public function height(): ?int
    {
        return $this->createAndCacheImageSource()->height();
    }

    public function __toString(): string
    {
        return $this->createAndCacheImageSource()->__toString();
    }

    public function scale(float $factor): ImageSourceInterface
    {
        return $this->createAndCacheImageSource()->scale($factor);
    }

    public function allowsCallOfMethod($methodName)
    {
        if (
            in_array(
                $methodName,
                [
                    'withAlt',
                    'withTitle',
                    'withDimensions',
                    'withFormat',
                    'withQuality',
                    'withWidth',
                    'withHeight',
                    'withThumbnailPreset',
                    'withVariantPreset',

                    'setWidth',
                    'setHeight',
                    'setDimensions',
                    'setFormat',
                    'setQuality',
                    'applyPreset',
                    'applyThumbnailPreset',
                    'useVariantPreset',

                    'src',
                    'dataSrc',
                    'srcset',
                    'title',
                    'alt',
                    'width',
                    'height',
                ]
            )
        ) {
            return true;
        }

        return false;
    }


}
