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

    public function allowsCallOfMethod($methodName)
    {
        return true;
    }
}
