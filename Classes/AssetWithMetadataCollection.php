<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Neos\Flow\Annotations as Flow;

#[Flow\Proxy(false)]
class AssetWithMetadataCollection implements \IteratorAggregate, \Countable, \JsonSerializable
{
    use SerializeItemTrait;
    use UnserializeItemTrait;
    use GetPersistenceManagerTrait;

    /**
     * @var AssetWithMetadata[]
     */
    public readonly array $items;

    public function __construct(
        AssetWithMetadata ...$items,
    ) {
        $this->items = $items;
    }

    /**
     * @return \Traversable<AssetWithMetadata>
     */
    public function getIterator(): \Traversable
    {
        yield from $this->items;
    }

    public function count(): int
    {
        return count($this->items);
    }

    public static function fromArray(array $data): self
    {
        $persistenceManager = self::getPersistenceManager();
        $items = array_map(
            fn(array $item) => self::unserializeItem($item, $persistenceManager),
            $data
        );
        return new self(...array_filter($items));
    }

    public function jsonSerialize(): array
    {
        $persistenceManager = self::getPersistenceManager();
        return array_map(
            fn(AssetWithMetadata $item) => self::serializeItem($item, $persistenceManager),
            $this->items,
        );
    }
}
