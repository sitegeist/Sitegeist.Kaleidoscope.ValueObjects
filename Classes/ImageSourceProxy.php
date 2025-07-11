<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Neos\Flow\Annotations as Flow;

/**
 * @phpstan-import-type assetProxyShape from ImageAssetProxy
 * @phpstan-type imagesourceProxyShape array{asset:assetProxyShape, alt?:string, title?: string}
 */
#[Flow\Proxy(false)]
final class ImageSourceProxy implements \JsonSerializable
{
    public function __construct(
        public readonly ImageAssetProxy $asset,
        public readonly string $alt = '',
        public readonly string $title = '',
    ) {
    }

    /**
     * @param imagesourceProxyShape|array{} $data
     * @return self|null
     */
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

    /**
     * @return imagesourceProxyShape
     */
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
