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

    // this is a workaround as properties are deleted by setting to "" string by the NeosUi instead of
    // removing the property or setting to null ... here the string "delete" us used and will convert to null
    public static function fromString(string $string): null
    {
        if ($string === 'delete') {
            return null;
        } else {
            throw new \Exception("ImageSourceProxy cannot be converted from strings other than 'delete'.");
        }
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
