<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Neos\Flow\Annotations as Flow;

#[Flow\Proxy(false)]
final class ImageAssetProxy implements \JsonSerializable
{
    public function __construct(
        public readonly string $identifier,
        public readonly string $classname
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['__identifier'] ?? $data['identifier'],
            $data['__flow_object_type'] ?? $data['classname'],
        );
    }

    public function jsonSerialize(): array
    {
        return [
          '__flow_object_type' => $this->classname,
          '__identifier' => $this->identifier
        ];
    }
}
