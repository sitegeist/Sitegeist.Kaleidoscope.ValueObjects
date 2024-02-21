<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Traversable;

class AssetWithMetadataCollection implements \IteratorAggregate, \Countable, \JsonSerializable
{
    /**
     * @var AssetWithMetadata[]
     */
    public readonly array $items;

    public function __construct(
        AssetWithMetadata ...$items,
    ) {
    }

    /**
     * @return Traversable<AssetWithMetadata>
     */
    public function getIterator(): Traversable
    {
        yield from $this->items;
    }

    public function count(): int
    {
        return count($this->items);
    }

    public static function fromArray(array $data): self
    {
        return new self(...array_map(fn(array $item) => AssetWithMetadata::fromArray($item), $data));
    }

    public function jsonSerialize(): mixed
    {
        return $this->items;
    }
}
