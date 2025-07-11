<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\Tests\Unit\Migration;

use Neos\ContentRepository\Domain\Model\NodeData;
use Neos\Media\Domain\Model\Image;
use PHPUnit\Framework\TestCase;
use Sitegeist\Kaleidoscope\ValueObjects\ImageAssetProxy;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy;
use Sitegeist\Kaleidoscope\ValueObjects\Migration\Transformations\ImageToImageSourceProxy;

class ImageToImageSourceProxyTest extends TestCase
{
    /**
     * @test
     */
    public function simple(): void
    {
        if (NeosNineDetector::isNeosNine()) {
            $this->markTestSkipped();
        }

        $source = $this->createMock(Image::class);
        $source->expects($this->once())->method('getIdentifier')->willReturn("image_identifier");

        $target = new ImageSourceProxy(
            new ImageAssetProxy('image_identifier', $source::class),
            "",
            ""
        );

        $mockNode = $this->createMock(NodeData::class);
        $mockNode->expects($this->any())->method('hasProperty')->with('image')->willReturn(true);
        $mockNode->expects($this->any())->method('getProperty')->with('image')->willReturn($source);

        $subject = new ImageToImageSourceProxy();
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

        $source = $this->createMock(Image::class);
        $source->expects($this->once())->method('getIdentifier')->willReturn("image_identifier");
        $alt = "alt text";
        $title = "title text";

        $target = new ImageSourceProxy(
            new ImageAssetProxy('image_identifier', $source::class),
            "alt text",
            "title text"
        );

        $mockNode = $this->createMock(NodeData::class);
        $mockNode
            ->expects($this->any())->method('hasProperty')
            ->willReturnCallback(fn(string $property) => in_array($property, ['image', 'alt', 'title']));
        $mockNode
            ->expects($this->any())->method('getProperty')
            ->willReturnCallback(fn(string $property) => match ($property) {
'image'=> $source, 'alt' => $alt, 'title' => $title
            });

        $subject = new ImageToImageSourceProxy();
        $subject->setSourceProperty('image');
        $subject->setTargetProperty('image');
        $subject->setAltProperty('alt');
        $subject->setTitleProperty('title');

        $this->assertTrue($subject->isTransformable($mockNode));
        $mockNode->expects($this->once())->method('setProperty')->with('image', $target);
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

        $source = new ImageSourceProxy(
            new ImageAssetProxy('image_identifier', Image::class),
            "alt text",
            "title text"
        );

        $mockNode = $this->createMock(NodeData::class);
        $mockNode->expects($this->any())->method('hasProperty')->with('image')->willReturn(true);
        $mockNode->expects($this->any())->method('getProperty')->with('image')->willReturn($source);

        $subject = new ImageToImageSourceProxy();
        $subject->setSourceProperty('image');
        $subject->setTargetProperty('image');
        $this->assertFalse($subject->isTransformable($mockNode));
    }
}
