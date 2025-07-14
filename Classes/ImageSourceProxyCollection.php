<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Neos\Flow\Annotations as Flow;

/**
 * @phpstan-import-type imagesourceProxyShape from ImageSourceProxy
 * @phpstan-type imagesourceProxycollectionShape imagesourceProxyShape[]
 * @implements \IteratorAggregate<int, ImageSourceProxy>
 */
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

    public function isEmpty(): bool
    {
        return empty($this->items);
    }

    public function getFirst(): ?ImageSourceProxy
    {
        if (count($this->items) > 0) {
            return $this->items[array_key_first($this->items)];
        }
        return null;
    }

    public function getRandom(): ?ImageSourceProxy
    {
        if (count($this->items) > 0) {
            $randomKey = array_rand($this->items);
            return $this->items[$randomKey];
        }
        return null;
    }

    public function withRandomOrder(): self
    {
        $items = $this->items;
        shuffle($items);
        return new self(...$items);
    }

    public function widthAppendedCollection(ImageSourceProxyCollection $collection): self
    {
        return new self(...$this->items, ...$collection->items);
    }

    public function widthAppendedItem(ImageSourceProxy $item): self
    {
        return new self(...$this->items, ...[$item]);
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

    /**
     * @param imagesourceProxycollectionShape $data
     * @return self
     */
    public static function fromArray(array $data): self
    {
        $items = array_map(
            fn(array $item) => ImageSourceProxy::fromArray($item),
            $data
        );
        return new self(...array_filter($items));
    }

    /**
     * @return imagesourceProxycollectionShape
     */
    public function jsonSerialize(): array
    {
        return array_map(
            fn(ImageSourceProxy $item) => $item->jsonSerialize(),
            $this->items,
        );
    }
}
