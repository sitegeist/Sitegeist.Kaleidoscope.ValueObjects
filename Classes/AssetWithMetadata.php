<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Neos\Media\Domain\Model\ImageInterface;
use Sitegeist\Kaleidoscope\Domain\AssetImageSource;
use Sitegeist\Kaleidoscope\Domain\ImageSourceInterface;
use Neos\Flow\Annotations as Flow;

#[Flow\Proxy(false)]
final class AssetWithMetadata implements \JsonSerializable
{
    public function __construct(
        public readonly ImageReference $image,
        public readonly string $alt = '',
        public readonly string $title = '',
    ) {
    }

    public function getImageInterface(): ImageInterface
    {
        return$this->image->toImageInterface();
    }

    public function getImageSource(): ImageSourceInterface
    {
        return new AssetImageSource($this->image->toImageInterface(), $this->title, $this->alt);
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

}
