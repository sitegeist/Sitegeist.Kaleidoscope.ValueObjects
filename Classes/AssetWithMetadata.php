<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Neos\Media\Domain\Model\ImageInterface;
use Sitegeist\Kaleidoscope\Domain\AssetImageSource;
use Sitegeist\Kaleidoscope\Domain\ImageSourceInterface;

final class AssetWithMetadata implements \JsonSerializable
{
    public function __construct(
        public readonly ImageInterface $asset,
        public readonly string $alt = '',
        public readonly string $title = '',
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['asset'],
            $data['alt'] ?? '',
            $data['title'] ?? '',
        );
    }

    public function getImageSource(): ImageSourceInterface
    {
        return new AssetImageSource($this->asset, $this->title, $this->alt);
    }

    public function jsonSerialize(): array
    {
        return [
            'asset' => $this->asset,
            'alt' => $this->alt,
            'title' => $this->title
        ];
    }
}
