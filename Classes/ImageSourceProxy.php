<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Neos\Flow\Annotations as Flow;

#[Flow\Proxy(false)]
final class ImageSourceProxy implements \JsonSerializable
{
    public function __construct(
        public readonly ImageAssetProxy $image,
        public readonly string $alt = '',
        public readonly string $title = '',
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            ImageAssetProxy::fromArray($data['asset']),
            $data['alt'] ?? '',
            $data['title'] ?? '',
        );
    }

    public function jsonSerialize(): array
    {
        return [
            'asset' => $this->image->jsonSerialize(),
            'alt' => $this->alt,
            'title' => $this->title,
        ];
    }
}
