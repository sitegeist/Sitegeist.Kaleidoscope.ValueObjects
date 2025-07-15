<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\Eel;

use Neos\Eel\ProtectedContextAwareInterface;
use Neos\Flow\Annotations as Flow;
use Sitegeist\Kaleidoscope\Domain\ImageSourceInterface;
use Sitegeist\Kaleidoscope\ValueObjects\Factory\ImageSourceFactory;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxyCollection;

class ValueObjectHelper implements ProtectedContextAwareInterface
{
    #[Flow\Inject]
    protected ImageSourceFactory $imageSourceFactory;

    public function unwrapProxy(?ImageSourceProxy $proxy): ?ImageSourceInterface
    {
        if ($proxy === null) {
            return null;
        }
        return $this->imageSourceFactory->tryCreateFromProxy($proxy);
    }

    /**
     * @param ImageSourceProxyCollection|null $proxyCollection
     * @return ImageSourceInterface[]
     */
    public function unwrapProxyCollection(?ImageSourceProxyCollection $proxyCollection): array
    {
        if ($proxyCollection === null) {
            return [];
        }
        return $this->imageSourceFactory->createFromProxyCollection($proxyCollection);
    }

    public function combineCollection(ImageSourceProxyCollection|ImageSourceProxy|null ...$items): ImageSourceProxyCollection
    {
        /**
         * @var ImageSourceProxy[] $proxies
         */
        $proxies = [];
        foreach ($items as $item) {
            if ($item instanceof ImageSourceProxy) {
                $proxies[] = $item;
            } elseif ($item instanceof ImageSourceProxyCollection) {
                $proxies = array_merge($proxies, $item->items);
            }
        }
        return new ImageSourceProxyCollection(...$proxies);
    }

    /**
     * @param ImageSourceProxyCollection|ImageSourceProxy|null ...$items
     * @return ImageSourceInterface[]
     */
    public function combineAndUnwrapCollection(ImageSourceProxyCollection|ImageSourceProxy|null ...$items): array
    {
        return $this->unwrapProxyCollection($this->combineCollection(...$items));
    }

    public function allowsCallOfMethod($methodName)
    {
        return true;
    }
}
