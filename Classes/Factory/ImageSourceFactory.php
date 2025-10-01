<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\Factory;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\ResourceManagement\ResourceManager;
use Sitegeist\Kaleidoscope\Domain\AssetImageSource;
use Sitegeist\Kaleidoscope\Domain\ImageSourceInterface;
use Sitegeist\Kaleidoscope\Domain\SvgAssetImageSource;
use Sitegeist\Kaleidoscope\Domain\UriImageSource;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxyCollection;

class ImageSourceFactory
{
    #[Flow\Inject]
    protected ImageAssetFactory $imageFactory;

    #[Flow\Inject]
    protected ResourceManager $resourceManager;

    public function tryCreateFromProxy(ImageSourceProxy $imageSourceProxy): ?ImageSourceInterface
    {
        $image = $this->imageFactory->tryCreateFromProxy($imageSourceProxy->asset);

        if ($image === null) {
            return null;
        }

        if ($image->getWidth() > 0 && $image->getHeight() > 0) {
            if ($image->getResource()->getMediaType() === 'image/svg+xml') {
                return new SvgAssetImageSource(
                    $image,
                    $imageSourceProxy->title,
                    $imageSourceProxy->alt,
                    true
                );
            }
            return new AssetImageSource(
                $image,
                $imageSourceProxy->title,
                $imageSourceProxy->alt,
                true
            );
        }

        $uri = $this->resourceManager->getPublicPersistentResourceUri($image->getResource());
        if (is_string($uri)) {
            return new UriImageSource(
                $uri,
                $imageSourceProxy->title,
                $imageSourceProxy->alt
            );
        } else {
            return null;
        }
    }

    /**
     * @return ImageSourceInterface[]
     */
    public function createFromProxyCollection(ImageSourceProxyCollection $imageSourceProxyCollection): array
    {
        $imageSources = [];
        foreach ($imageSourceProxyCollection as $imageSourceProxy) {
            if ($imageSource = $this->tryCreateFromProxy($imageSourceProxy)) {
                $imageSources[] = $imageSource;
            }
        }
        return $imageSources;
    }
}
