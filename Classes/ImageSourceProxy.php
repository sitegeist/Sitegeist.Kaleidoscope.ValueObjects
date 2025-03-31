<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Neos\Flow\Annotations as Flow;

#[Flow\Proxy(false)]
final class ImageSourceProxy implements \JsonSerializable
{
    public function __construct(
        public readonly ImageAssetProxy $asset,
        public readonly string $alt = '',
        public readonly string $title = '',
    ) {
    }

    public static function fromArray(array $data): ?self
    {
        // empty arrays are effectively null values and should be persisted as such
        if ($data === []) {
            return null;
        }
        return new self(
            ImageAssetProxy::fromArray($data['asset']),
            $data['alt'] ?? '',
            $data['title'] ?? '',
        );
    }

    public function jsonSerialize(): array
    {
        return [
            'asset' => $this->asset->jsonSerialize(),
            'alt' => $this->alt,
            'title' => $this->title,
        ];
    }

    public function __toString(): string
    {
        return '-';
    }
}
