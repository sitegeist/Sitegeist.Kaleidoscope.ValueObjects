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

### Inspector Editor Configuration

For properties of type `Sitegeist\Kaleidoscope\ValueObjects\ImageSourceProxy` and `...\ImageSourceProxyCollection`
dedicated inspector editors `Sitegeist.Kaleidoscope.ValueObjects/Inspector/Editors/AssetWithMetadataEditor` and `.../AssetWithMetadataCollectionEditor` 
are provided and configured for the Proxy Objects. The Editor Configuration is derived from the options as the Neos `ImageEditor` 
as is documented [here](https://neos.readthedocs.io/en/stable/References/PropertyEditorReference.html#property-type-image-neos-media-domain-model-imageinterface-imageeditor-image-selection-upload-editor).

#### Options Reference:

* `maximumFileSize` (string)
Set the maximum allowed file size to be uploaded.
Accepts numeric or formatted string values, e.g. "204800" or "204800b" or "2kb".
Defaults to the maximum allowed upload size configured in php.ini
* `constraints`
  * `mediaTypes` (array)
    If set, the media browser and file upload will be limited to assets with the specified media type. Default `['image/*']`
    Example: `['image/png', 'image/jpeg']`
    Note: Due to technical limitations the media browser currently ignores the media sub type, so `image/png` has the same effect as `image/*`
  * `assetSources` (array)
    If set, the media browser will be limited to assets of the specified asset source. Default: `[]` (all asset sources)
    Example: `['neos', 'custom_asset_source]`
* `features`
  * `crop` (boolean) If `true`, enable image cropping. Default `true`.
  * `upload` (boolean) If `true`, enable Upload button, allowing new files to be uploaded directly in the editor. Default `true`.
  * `mediaBrowser` (boolean) If `true`, enable Media Browser button. Default `true`.
* `resize` (boolean) If `true`, enable image resizing. Default `FALSE`.
* `crop` crop-related options. Only relevant if `features.crop` is enabled.
  * `aspectRatio`
    * `forceCrop` (boolean) Show the crop dialog on image upload
      * `locked` Locks the aspect ratio to a specific width/height ratio
        * `width` (integer) width of the aspect ratio which shall be enforced
        * `height` (integer) height of the aspect ratio which shall be enforced
      * `options` aspect-ratio presets. Only effective if `locked` is not set.
        * `[presetIdentifier]`
          * `width` (required integer) the width of the aspect ratio preset
          * `height` (required integer) the height of the aspect ratio preset
          * `label` (string) uman-readable name of the aspect ratio preset
      * `enableOriginal` (boolean)
        If `true`, the image ratio of the original image can be chosen in the selector.
        Only effective if `locked` is not set. Default `true`.
      *  `allowCustom` (boolean)
         If `true`, a completely custom image ratio can be chosen. Only effective if `locked`
         is not set. Default `true`.
      *  `defaultOption` (string) default aspect ratio option to be chosen if no cropping has been applied already.
* `disabled` (boolean) If `true`, disables the ImageEditor.

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
imageSource = ${Sitegeist.Kaleidoscope.ValueObjects.unwrapProxy(q(node).property('imageSourceProxy'))}
imageSources = ${Sitegeist.Kaleidoscope.ValueObjects.unwrapProxyCollection(q(node).property('imageSourceProxyCollection'))}
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
