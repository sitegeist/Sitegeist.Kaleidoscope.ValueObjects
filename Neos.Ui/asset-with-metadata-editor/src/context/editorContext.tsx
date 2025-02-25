import * as React from 'react'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { AssetWithMeta, Meta } from '../types'

type MetaWithId = {
    id: string
} & Meta

type EditorContextValue = {
    meta: MetaWithId[]
    extern: AssetWithMeta[]
    update: (assets: AssetWithMeta[]) => void
    setMeta: (meta: MetaWithId) => void
}

type EditorContextProviderProps = {
    extern: AssetWithMeta[]
    update: (assets: AssetWithMeta[]) => void
    children: ReactNode
}

const EditorContext = createContext<EditorContextValue | undefined>(undefined)

export const useEditorContext = () => {
    const context = useContext(EditorContext)

    if (!context) throw new Error('useEditorContext needs to be wrapt in the EditorContextProvider')

    return context
}

export const EditorContextProvider = ({ children, extern, update }: EditorContextProviderProps) => {
    const [meta, setMeta] = useState<MetaWithId[]>([])

    useEffect(() => {
        if (!meta.length) return

        update(
            extern.map((ve) => {
                const metaExist = meta.find((m) => m.id === ve.asset.__identifier)
                if (!metaExist) return ve
                return {
                    ...ve,
                    alt: metaExist.alt,
                    title: metaExist.title,
                }
            })
        )
    }, [meta])

    const onChange = (metaToUpdate: MetaWithId) => {
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
        <EditorContext.Provider value={{ meta, extern, setMeta: onChange, update }}>
            {children}
        </EditorContext.Provider>
    )
}
