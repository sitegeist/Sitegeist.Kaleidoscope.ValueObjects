<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Neos\Flow\Core\Bootstrap;
use Neos\Flow\Persistence\Doctrine\PersistenceManager;
use Neos\Flow\Persistence\PersistenceManagerInterface;
use Neos\Media\Domain\Model\ImageInterface;
use Neos\Utility\TypeHandling;
use Neos\Flow\Annotations as Flow;

#[Flow\Proxy(false)]
final class ImageReference implements \JsonSerializable
{
    public function __construct(
        public readonly string $identifier,
        public readonly string $classname
    ) {
    }

    public function toImageInterface(): ?ImageInterface
    {
        $persistenceManager = Bootstrap::$staticObjectManager->get(PersistenceManager::class);
        $image = $persistenceManager->getObjectByIdentifier(
            $this->identifier,
            $this->classname,
            true
        );
        if ($image instanceof ImageInterface) {
            return $image;
        }
        return null;
    }

    public static function fromImageInterface(ImageInterface $image): self
    {
        $persistenceManager = Bootstrap::$staticObjectManager->get(PersistenceManager::class);
        $assetClassName = TypeHandling::getTypeForValue($image);
        $assetIdentifier = $persistenceManager->getIdentifierByObject($image);
        return new self($assetIdentifier, $assetClassName);
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['__identifier'],
            $data['__flow_object_type'],
        );
    }

    public function toArray(): array
    {
        return [
            '__flow_object_type' => $this->classname,
            '__identifier' => $this->identifier
        ];
    }

    public function jsonSerialize(): array
    {
        return [
          '__flow_object_type' => $this->classname,
          '__identifier' => $this->identifier
        ];
    }
}
