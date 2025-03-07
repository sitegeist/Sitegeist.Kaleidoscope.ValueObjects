<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Neos\Flow\Annotations as Flow;

#[Flow\Proxy(false)]
class ImageSourceProxyCollection implements \IteratorAggregate, \Countable, \JsonSerializable
{
    /**
     * @var ImageSourceProxy[]
     */
    public readonly array $items;

    public function __construct(
        ImageSourceProxy ...$items,
    ) {
        $this->items = $items;
    }

    /**
     * @return \Traversable<ImageSourceProxy>
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
        $items = array_map(
            fn(array $item) => ImageSourceProxy::fromArray($item),
            $data
        );
        return new self(...array_filter($items));
    }

    public function jsonSerialize(): array
    {
        return array_map(
            fn(ImageSourceProxy $item) => $item->jsonSerialize(),
            $this->items,
        );
    }
}
