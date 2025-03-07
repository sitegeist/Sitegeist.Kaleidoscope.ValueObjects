<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\Factory;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\Doctrine\PersistenceManager;
use Neos\Media\Domain\Model\ImageInterface;
use Sitegeist\Kaleidoscope\ValueObjects\ImageAssetProxy;

class ImageAssetFactory
{
    #[Flow\Inject]
    protected PersistenceManager $persistenceManager;

    public function tryCreateFromProxy(ImageAssetProxy $reference): ?ImageInterface
    {
        $image = $this->persistenceManager->getObjectByIdentifier(
            $reference->identifier,
            $reference->classname,
            true
        );
        if ($image instanceof ImageInterface) {
            return $image;
        }
        return null;
    }
}
