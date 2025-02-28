# Sitegeist.Kaleidoscope.ValueObjects
## Proxy objects for ImageSources

Proxy objects for ImageSources that can be edited in the inspector directly and allow editing of images and image collections
together with alt and title for each item.

### Authors & Sponsors

* Christian Pansch - pansch@sitegeist.de
* Martin Ficzel - ficzel@sitegeist.de

*The development and the public-releases of this package is generously sponsored
by our employer http://www.sitegeist.de.*

## Installation

Sitegeist.Kaleidoscope.ValueObjects is available via packagist run `composer require sitegeist/kaleidoscope-valueobjects`.
We use semantic versioning so every breaking change will increase the major-version number.

## Usage

### NodeTypes

Single images are edited via property type `Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy`.

```yaml
    imageSourceProxy:
      type: 'Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy'
      defaultValue: null
      ui:
        label: 'Image'
        inspector:
          group: imageWithMetadata
```
Lists of images are edited via property type `Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxyCollection`.

```yaml
    imageSourceProxyCollection:
      type: 'Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxyCollection'
      defaultValue: []
      ui:
        label: 'Images'
        inspector:
          group: imageWithMetadata
```

### EEL & Fusion

When one of the proxy objects is passed to a `Sitegeist.Kaleidoscope.Image|Picture|Source` prototype as `imageSource` 
the value is automatically converted into an `ImageSourceInterface`.

```neosfusion
    example = Sitegeist.Kaleidoscope:Image {
        imageSource = ${q(node).property('imageSourceProxy')}
    }
```

If you need more control over the conversion from proxies to image sources you can use you can use the `Kaleidoscope.ValueObjects` helper.
Be careful as those methods only allow the `ImageSourceProxy`, `ImageSourceProxyCollection` and `null` as parameter.

```neosfusion
imageSource = ${Kaleidoscope.ValueObjects.unwrapProxy(q(node).property('imageSourceProxy'))}
imageSources = ${Kaleidoscope.ValueObjects.unwrapProxyCollection(q(node).property('imageSourceProxyCollection'))}
```

There are also fusion prototypes that will check the type of the given value convert `ImageSourceProxy`,
`ImageSourceProxyCollection` but leave all other values untouched.

```neosfusion
# read imageSourceProxy and convert to imageSource
imageSource = ${q(node).property('imageSourceProxy')}
imageSource.@process.unwrapImageSourceProxy = Sitegeist.Kaleidoscope.ValueObjects:ImageSourceProxyUnwrapper

imageSources = ${q(node).property('imageSourceProxyCollection')}
imageSources.@process.unwrapImageSourceProxy = Sitegeist.Kaleidoscope.ValueObjects:ImageSourceProxyCollectionUnwrapper
```

## Contribution

We will gladly accept contributions. Please send us pull requests.
