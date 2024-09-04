<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Traversable;
use Neos\Flow\Annotations as Flow;

#[Flow\Proxy(false)]
class AssetWithMetadataCollection implements \IteratorAggregate, \Countable
{
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
}
