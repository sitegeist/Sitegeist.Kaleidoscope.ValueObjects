<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Doctrine\Persistence\Proxy;
use Neos\Flow\Annotations as Flow;
use Neos\Media\Domain\Model\AssetInterface;
use Neos\Media\Domain\Model\Image;
use Neos\Media\Domain\Model\ImageVariant;

/**
 * @phpstan-type assetProxyShapeV8 array{__identifier: string, __flow_object_type: class-string}
 * @phpstan-type assetProxyShapeV9 array{identifier: string, classname: class-string}
 * @phpstan-type assetProxyShape assetProxyShapeV8|assetProxyShapeV9
 */
#[Flow\Proxy(false)]
final class ImageAssetProxy implements \JsonSerializable
{
    /**
     * @param class-string $classname
     */
    public function __construct(
        public readonly string $identifier,
        public readonly string $classname
    ) {
    }

    /**
     * @param assetProxyShape $data
     * @return self
     */
    public static function fromArray(array $data): self
    {
        return new self(
            /** @phpstan-ignore offsetAccess.notFound*/
            $data['__identifier'] ?? $data['identifier'],
            /** @phpstan-ignore offsetAccess.notFound*/
            $data['__flow_object_type'] ?? $data['classname'],
        );
    }

    public static function fromAsset(Image|ImageVariant $asset): self
    {
        if ($asset instanceof Proxy) {
            /** @var class-string $className */
            $className = get_parent_class($asset);
        } else {
            /** @var class-string $className */
            $className = get_class($asset);
        }
        return new self(
            $asset->getIdentifier(),
            $className
        );
    }

    /**
     * @return assetProxyShape
     */
    public function jsonSerialize(): array
    {
        return [
          '__flow_object_type' => $this->classname,
          '__identifier' => $this->identifier
        ];
    }
}
