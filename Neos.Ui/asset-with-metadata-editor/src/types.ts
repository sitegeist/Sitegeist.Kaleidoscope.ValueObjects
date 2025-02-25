export type Asset = {
    __identifier: string
    __flow_object_type: string
}

export type Meta = {
    title?: string
    alt?: string
}

export type AssetWithMeta = {
    asset: Asset
} & Meta

export type Props<T> = {
    identifier: string
    className: string
    value: T
    options: {
        placeholder: string
        disabled?: boolean
        threshold?: any
        constraints?: any
    }
    editor: string
    renderSecondaryInspector: Function
    neos: {
        globalRegistry: any
    }
    commit: (value: T) => void
}

export type Option = {
    dataType: string
    identifier: string
    label: string
    loaderUri: string
    preview: string
}
