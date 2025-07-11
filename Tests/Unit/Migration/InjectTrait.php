<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\Tests\Unit\Migration;

trait InjectTrait
{
    /**
     * @param object $target The instance which needs the dependency
     * @param string $propertyName Name of the property to be injected
     * @param mixed $propertyValue The dependency to inject – usually an object but can also be any other type
     */
    protected function inject(object $target, string $propertyName, mixed $propertyValue): void
    {
        if (!is_object($target)) {
            throw new \InvalidArgumentException('Wrong type for argument $target, must be object.');
        }

        $objectReflection = new \ReflectionObject($target);
        $methodNamePart = strtoupper($propertyName[0]) . substr($propertyName, 1);
        if ($objectReflection->hasMethod('set' . $methodNamePart)) {
            $methodName = 'set' . $methodNamePart;
            $target->$methodName($propertyValue);
        } elseif ($objectReflection->hasMethod('inject' . $methodNamePart)) {
            $methodName = 'inject' . $methodNamePart;
            $target->$methodName($propertyValue);
        } elseif ($objectReflection->hasProperty($propertyName)) {
            $property = $objectReflection->getProperty($propertyName);
            $property->setAccessible(true);
            $property->setValue($target, $propertyValue);
        } else {
            throw new \RuntimeException('Could not inject ' . $propertyName . ' into object of type ' . get_class($target));
        }
    }
}
