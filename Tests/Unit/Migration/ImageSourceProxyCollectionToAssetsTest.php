<?php

declare(strict_types=1);

namespace Sitegeist\Kaleidoscope\ValueObjects\Tests\Unit\Migration;

use Neos\ContentRepository\Domain\Model\NodeData;
use Neos\Media\Domain\Model\Image;
use Neos\Media\Domain\Model\ImageVariant;
use PHPUnit\Framework\TestCase;
use Sitegeist\Kaleidoscope\ValueObjects\Factory\ImageAssetFactory;
use Sitegeist\Kaleidoscope\ValueObjects\ImageAssetProxy;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy;
use Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxyCollection;
use Sitegeist\Kaleidoscope\ValueObjects\Migration\Transformations\AssetsToImageSourceProxyCollection;
use Sitegeist\Kaleidoscope\ValueObjects\Migration\Transformations\ImageSourceProxyCollectionToAssets;
use Sitegeist\Kaleidoscope\ValueObjects\Migration\Transformations\ImageToImageSourceProxy;

class ImageSourceProxyCollectionToAssetsTest extends TestCase
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

        $image1 = $this->createMock(Image::class);
        $image2 = $this->createMock(ImageVariant::class);

        $assetProxy1 = new ImageAssetProxy('image1', Image::class);
        $assetProxy2 = new ImageAssetProxy('image2', ImageVariant::class);

        $imageSourceProxy1 = new ImageSourceProxy($assetProxy1, "", "");
        $imageSourceProxy2 = new ImageSourceProxy($assetProxy2, "", "");

        $source = new ImageSourceProxyCollection($imageSourceProxy1, $imageSourceProxy2);

        $target = [
            0 => $image1,
            1 => $image2
        ];

        $mockAssetFactory = $this->createMock(ImageAssetFactory::class);
        $mockAssetFactory
            ->expects($this->exactly(2))
            ->method('tryCreateFromProxy')
            ->willReturnCallback(fn(ImageAssetProxy $proxy) => match ($proxy) {
$assetProxy1 => $image1, $assetProxy2 => $image2
            });

        $mockNode = $this->createMock(NodeData::class);
        $mockNode->expects($this->any())->method('hasProperty')->with('images')->willReturn(true);
        $mockNode->expects($this->any())->method('getProperty')->with('images')->willReturn($source);

        $subject = new ImageSourceProxyCollectionToAssets();
        $this->inject($subject, 'imageAssetFactory', $mockAssetFactory);
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

        $image1 = $this->createMock(Image::class);
        $image1->expects($this->any())->method('getIdentifier')->willReturn('image1');

        $image2 = $this->createMock(ImageVariant::class);
        $image2->expects($this->any())->method('getIdentifier')->willReturn('image2');

        $source = [
            0 => $image1,
            1 => $image2
        ];

        $mockNode = $this->createMock(NodeData::class);
        $mockNode->expects($this->any())->method('hasProperty')->with('image')->willReturn(true);
        $mockNode->expects($this->any())->method('getProperty')->with('image')->willReturn($source);

        $subject = new ImageSourceProxyCollectionToAssets();
        $subject->setSourceProperty('image');
        $subject->setTargetProperty('image');
        $this->assertFalse($subject->isTransformable($mockNode));
    }
}
