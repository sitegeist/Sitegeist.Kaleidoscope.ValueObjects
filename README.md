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

Sitegeist.Kaleidoscope is available via packagist run `composer require sitegeist/kaleidoscope-valueobjects`.
We use semantic versioning so every breaking change will increase the major-version number.

## Configuration

### NodeTypes

Single images sources are edited via property type `Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy`.
```yaml
    imageSourceProxy:
      type: 'Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy'
      defaultValue: null
      ui:
        label: 'Image'
        reloadPageIfChanged: true
        inspector:
          group: imageWithMetadata
```
Lists of images sources are edited via property type `Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxyCollection`.

```yaml
    imageSourceProxyCollection:
      type: 'Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxyCollection'
      defaultValue: []
      ui:
        label: 'Images'
        reloadPageIfChanged: true
        inspector:
          group: imageWithMetadata
```

## Contribution

We will gladly accept contributions. Please send us pull requests.
