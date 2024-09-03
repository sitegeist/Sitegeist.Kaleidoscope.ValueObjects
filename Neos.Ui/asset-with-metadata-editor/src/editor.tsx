import {
    Label,
    MultiSelectBox,
    SelectBox_Option_MultiLineWithThumbnail,
    TextInput,
} from '@neos-project/react-ui-components'
import * as React from 'react'

import { MetaContextProvider, useMetaContext } from './metaContext'

type Props = {
    identifier: string
    className: string
    value: any
    options: {
        multiple: boolean
        placeholder: string
        disabled?: boolean
        threshold?: any
    }
    editor: string
    renderSecondaryInspector: Function
    neos: {
        globalRegistry: any
    }
    commit: (value: any) => void
}

type Option = {
    dataType: string
    identifier: string
    label: string
    loaderUri: string
    preview: string
}

export const Editor = ({
    value: valueExtern,
    neos: { globalRegistry },
    renderSecondaryInspector,
    options: { multiple, placeholder, disabled, threshold },
    commit,
}: Props) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [options, setOptions] = React.useState<Option[]>([])

    const valueRef = React.useRef(valueExtern)

    const i18nRegistry = globalRegistry.get('i18n')
    const assetLookupDataLoader = globalRegistry.get('dataLoaders').get('AssetLookup')

    React.useEffect(() => {
        valueRef.current = valueExtern
    }, [valueExtern])

    const getIdentity = (value: any) => {
        // Information coming from metadata
        if (value && value.__identity) {
            return value.__identity
        }
        // Information coming from upload endpoint
        if (value && value.assetUuid) {
            return value.assetUuid
        }
        return value
    }

    const getValue = () => {
        return getIdentity(valueRef.current)
    }

    const getValues = () => {
        return Array.isArray(valueRef.current) ? valueRef.current.map(getIdentity) : []
    }

    React.useEffect(() => {
        const resolver = async () => {
            if (valueExtern) {
                setIsLoading(true)

                const values = multiple ? getValues() : [getValue()]

                const options = await Promise.all(
                    values.map((value) => assetLookupDataLoader.resolveValue({}, value))
                )

                setIsLoading(false)
                setOptions([].concat(...options))
            }
        }

        resolver()
    }, [valueExtern])

    const handleMediaSelection = (assetIdentifier: any) => {
        if (multiple) return commit([...getValues(), assetIdentifier])

        commit(assetIdentifier)
    }

    const handleChooseFromMedia = () => {
        const { component: MediaSelectionScreen } = globalRegistry
            .get('inspector')
            .get('secondaryEditors')
            .get('Neos.Neos/Inspector/Secondary/Editors/MediaSelectionScreen')

        renderSecondaryInspector('IMAGE_SELECT_MEDIA', () => (
            <MediaSelectionScreen constraints={{}} onComplete={handleMediaSelection} />
        ))
    }

    const handleChooseFile = () => {
        const { component: AssetUploadScreen } = globalRegistry
            .get('inspector')
            .get('secondaryEditors')
            .get('Neos.Neos/Inspector/Secondary/Editors/AssetUploadScreen')

        renderSecondaryInspector('ASSET_UPLOAD_MEDIA', () => (
            <AssetUploadScreen
                type={'images'}
                constraints={{}}
                onComplete={(props: any) => console.log('handleChooseFile.onComplete', props)}
                additionalData={{}}
            />
        ))
    }

    return (
        <MetaContextProvider>
            <MultiSelectBox
                optionValueField="identifier"
                loadingLabel={i18nRegistry.translate('Neos.Neos:Main:loading')}
                displaySearchBox={true}
                ListPreviewElement={Test}
                placeholder={i18nRegistry.translate(placeholder)}
                options={options}
                values={getValues()}
                onValuesChange={commit}
                displayLoadingIndicator={isLoading}
                searchOptions={[]}
                showDropDownToggle={false}
                onSearchTermChange={() => {}}
                noMatchesFoundLabel={i18nRegistry.translate('Neos.Neos:Main:noMatchesFound')}
                searchBoxLeftToTypeLabel={i18nRegistry.translate(
                    'Neos.Neos:Main:searchBoxLeftToType'
                )}
                threshold={threshold}
                disabled={disabled}
            />
            <button onClick={handleChooseFromMedia}>Media</button>
            <button onClick={handleChooseFile}>File</button>
        </MetaContextProvider>
    )
}

const Test = (props: any) => {
    const { setMeta, meta } = useMetaContext()

    const onChangeTitle = (value: string) => {}
    return (
        <>
            <SelectBox_Option_MultiLineWithThumbnail
                {...props}
                imageUri={props.option.preview}
                label={props.option.label}
            />
            <Label htmlFor="title">
                Title
                <TextInput type="text" id="title" />
            </Label>
            <Label htmlFor="alt">
                Alt
                <TextInput type="text" id="alt" />
            </Label>
        </>
    )
}
