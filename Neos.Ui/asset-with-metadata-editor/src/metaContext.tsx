import * as React from 'react'

type Meta = {
    id: string
    title?: string
    alt?: string
}

type MetaContextValue = {
    meta: Meta[]
    setMeta: (meta: Meta) => void
}

type MetaContextProviderProps = {
    children: React.ReactNode
}

const MetaContext = React.createContext<MetaContextValue | undefined>(undefined)

export const useMetaContext = () => {
    const context = React.useContext(MetaContext)

    if (!context) throw new Error('useMetaContext needs to be wrapt in the MetaContextProvider')

    return context
}

export const MetaContextProvider = ({ children }: MetaContextProviderProps) => {
    const [meta, setMeta] = React.useState<Meta[]>([])

    const onChange = (metaToUpdate: Meta) => {
        const metaExist = meta.findIndex((meta) => meta.id === metaToUpdate.id)
        if (metaExist === -1) {
            return setMeta((old) => [...old, metaToUpdate])
        }

        setMeta((old) =>
            old.map((meta) => {
                if (meta.id === metaToUpdate.id) {
                    return metaToUpdate
                }
                return meta
            })
        )
    }

    return (
        <MetaContext.Provider value={{ meta, setMeta: onChange }}>{children}</MetaContext.Provider>
    )
}
