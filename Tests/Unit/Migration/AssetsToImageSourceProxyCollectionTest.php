<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\Tests\Unit\Migration;

use Neos\ContentRepository\Domain\Model\NodeData;
use Neos\Media\Domain\Model\Image;
use Neos\Media\Domain\Model\ImageVariant;
use PHPUnit\Framework\TestCase;
use Sitegeist\Kaleidoscope\ValueObjects\ImageAssetProxy;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxyCollection;
use Sitegeist\Kaleidoscope\ValueObjects\Migration\Transformations\AssetsToImageSourceProxyCollection;

class AssetsToImageSourceProxyCollectionTest extends TestCase
{
    /**
     * @test
     */
    public function simple(): void
    {
        if (NeosNineDetector::isNeosNine()) {
            $this->markTestSkipped();
        }

        $image1 = $this->createMock(Image::class);
        $image1->expects($this->any())->method('getIdentifier')->willReturn('image1');

        $image2 = $this->createMock(ImageVariant::class);
        $image2->expects($this->any())->method('getIdentifier')->willReturn('image2');

        $source = [
            $image1,
            $image2
        ];

        $target = new ImageSourceProxyCollection(
            new ImageSourceProxy(new ImageAssetProxy('image1', $image1::class), "", ""),
            new ImageSourceProxy(new ImageAssetProxy('image2', $image2::class), "", ""),
        );

        $mockNode = $this->createMock(NodeData::class);
        $mockNode->expects($this->any())->method('hasProperty')->with('images')->willReturn(true);
        $mockNode->expects($this->any())->method('getProperty')->with('images')->willReturn($source);

        $subject = new AssetsToImageSourceProxyCollection();
        $subject->setSourceProperty('images');
        $subject->setTargetProperty('images');

        $this->assertTrue($subject->isTransformable($mockNode));
        $mockNode->expects($this->once())->method('setProperty')->with('images', $target);
        $subject->execute($mockNode);
    }

    /**
     * @test
     */
    public function idempotent(): void
    {
        if (NeosNineDetector::isNeosNine()) {
            $this->markTestSkipped();
        }

        $source = new ImageSourceProxyCollection();

        $mockNode = $this->createMock(NodeData::class);
        $mockNode->expects($this->any())->method('hasProperty')->with('image')->willReturn(true);
        $mockNode->expects($this->any())->method('getProperty')->with('image')->willReturn($source);

        $subject = new AssetsToImageSourceProxyCollection();
        $subject->setSourceProperty('image');
        $subject->setTargetProperty('image');
        $this->assertFalse($subject->isTransformable($mockNode));
    }
}
