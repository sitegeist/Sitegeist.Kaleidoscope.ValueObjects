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
    use SerializeItemTrait;
    use UnserializeItemTrait;
    use GetPersistenceManagerTrait;

    public function __construct(
        public readonly ImageInterface $asset,
        public readonly string $alt = '',
        public readonly string $title = '',
    ) {
    }

    public function getImageSource(): ImageSourceInterface
    {
        return new AssetImageSource($this->asset, $this->title, $this->alt);
    }

    public static function fromArray(array $data): self
    {
        $persistenceManager = self::getPersistenceManager();
        return self::unserializeItem($data, $persistenceManager);
    }

    public function jsonSerialize(): array
    {
        $persistenceManager = self::getPersistenceManager();
        return self::serializeItem($this, $persistenceManager);
    }

}
