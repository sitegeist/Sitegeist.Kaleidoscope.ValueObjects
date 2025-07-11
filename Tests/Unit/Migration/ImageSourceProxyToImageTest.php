<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\Tests\Unit\Migration;

use Neos\ContentRepository\Domain\Model\NodeData;
use Neos\Media\Domain\Model\Asset;
use Neos\Media\Domain\Model\Image;
use PHPUnit\Framework\TestCase;
use Sitegeist\Kaleidoscope\ValueObjects\Factory\ImageAssetFactory;
use Sitegeist\Kaleidoscope\ValueObjects\ImageAssetProxy;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy;
use Sitegeist\Kaleidoscope\ValueObjects\Migration\Transformations\ImageSourceProxyToImage;
use Sitegeist\Kaleidoscope\ValueObjects\Migration\Transformations\ImageToImageSourceProxy;

class ImageSourceProxyToImageTest extends TestCase
{
    use InjectTrait;

    /**
     * @test
     */
    public function simple(): void
    {
        if (NeosNineDetector::isNeosNine()) {
            $this->markTestSkipped();
        }

        $target = $this->createMock(Image::class);
        $imageAssetProxy = new ImageAssetProxy('image_identifier', Image::class);
        $source = new ImageSourceProxy($imageAssetProxy, "", "");

        $mockAssetFactory = $this->createMock(ImageAssetFactory::class);
        $mockAssetFactory->expects($this->once())->method('tryCreateFromProxy')->with($imageAssetProxy)->willReturn($target);

        $mockNode = $this->createMock(NodeData::class);
        $mockNode->expects($this->any())->method('hasProperty')->with('image')->willReturn(true);
        $mockNode->expects($this->any())->method('getProperty')->with('image')->willReturn($source);

        $subject = new ImageSourceProxyToImage();
        $this->inject($subject, 'imageAssetFactory', $mockAssetFactory);
        $subject->setSourceProperty('image');
        $subject->setTargetProperty('image');

        $this->assertTrue($subject->isTransformable($mockNode));
        $mockNode->expects($this->once())->method('setProperty')->with('image', $target);
        $subject->execute($mockNode);
    }

    /**
     * @test
     */
    public function withAltAndTitle(): void
    {
        if (NeosNineDetector::isNeosNine()) {
            $this->markTestSkipped();
        }

        $target = $this->createMock(Image::class);
        $imageAssetProxy = new ImageAssetProxy('image_identifier', Image::class);

        $source = new ImageSourceProxy($imageAssetProxy, "alt text", "title text");
        $alt = "alt text";
        $title = "title text";

        $mockAssetFactory = $this->createMock(ImageAssetFactory::class);
        $mockAssetFactory->expects($this->once())->method('tryCreateFromProxy')->with($imageAssetProxy)->willReturn($target);


        $mockNode = $this->createMock(NodeData::class);
        $mockNode
            ->expects($this->any())
            ->method('hasProperty')
            ->willReturnCallback(fn(string $property) => in_array($property, ['image', 'alt', 'title']));
        $mockNode
            ->expects($this->any())
            ->method('getProperty')
            ->willReturnCallback(fn(string $property) => match ($property) {
'image'=> $source
            });

        $subject = new ImageSourceProxyToImage();
        $this->inject($subject, 'imageAssetFactory', $mockAssetFactory);
        $subject->setSourceProperty('image');
        $subject->setTargetProperty('image');
        $subject->setAltProperty('alt');
        $subject->setTitleProperty('title');


        $this->assertTrue($subject->isTransformable($mockNode));
        $mockNode->expects($this->exactly(3))->method('setProperty')->withConsecutive(
            ['alt', $alt],
            ['title', $title],
            ['image', $target],
        );
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

        $source = $this->createMock(Asset::class);

        $mockNode = $this->createMock(NodeData::class);
        $mockNode->expects($this->any())->method('hasProperty')->with('image')->willReturn(true);
        $mockNode->expects($this->any())->method('getProperty')->with('image')->willReturn($source);

        $subject = new ImageSourceProxyToImage();
        $subject->setSourceProperty('image');
        $subject->setTargetProperty('image');
        $this->assertFalse($subject->isTransformable($mockNode));
    }
}
