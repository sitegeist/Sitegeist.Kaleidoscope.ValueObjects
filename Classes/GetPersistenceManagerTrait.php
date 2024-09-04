<?php
declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects;

use Neos\Flow\Core\Bootstrap;
use Neos\Flow\Persistence\Doctrine\PersistenceManager;

trait GetPersistenceManagerTrait
{
    protected static function getPersistenceManager(): PersistenceManager
    {
        return Bootstrap::$staticObjectManager->get(PersistenceManager::class);
    }
}
