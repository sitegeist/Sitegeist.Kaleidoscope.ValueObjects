export type Asset = {
    __identity: string
    __flow_object_type: string
}

export type Meta = {
    title?: string
    alt?: string
}

export type AssetWithMeta = {
    asset: Asset
} & Meta

export type Props = {
    identifier: string
    className: string
    value: AssetWithMeta[]
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
    commit: (value: AssetWithMeta[]) => void
}

export type Option = {
    dataType: string
    identifier: string
    label: string
    loaderUri: string
    preview: string
}
