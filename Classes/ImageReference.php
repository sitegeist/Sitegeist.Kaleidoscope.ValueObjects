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
    /**
     * The name ensures this is skipped in debug outputs
     * to avoid confusion
     * @var PersistenceManagerInterface|null
     */
    private static ?PersistenceManagerInterface $Flow_Aop_PersistenceManager = null;

    public function __construct(
        public readonly string $identifier,
        public readonly string $classname
    ) {
    }

    public function toImageInterface(): ?ImageInterface
    {
        $persistenceManager = self::getPersistenceManager();
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
        $persistenceManager = self::getPersistenceManager();
        $assetClassName = TypeHandling::getTypeForValue($image);
        $assetIdentifier = $persistenceManager->getIdentifierByObject($image);
        return new self($assetIdentifier, $assetClassName);
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['__flow_object_type'],
            $data['__identifier'],
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

    private static function getPersistenceManager(): PersistenceManager
    {
        if (self::$Flow_Aop_PersistenceManager === null) {
            self::$Flow_Aop_PersistenceManager = Bootstrap::$staticObjectManager->get(PersistenceManager::class);
        }
        return self::$Flow_Aop_PersistenceManager;
    }

}
