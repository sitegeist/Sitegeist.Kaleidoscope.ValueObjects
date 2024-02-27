export interface INodeType {
    name: string
    label: string
    ui?: {
        icon?: string
    }
}

export interface INodeTypesRegistry {
    get: (key: string) => undefined | INodeType
    getAllAsList: () => INodeType[]
    isOfType: (name: string, reference: string) => boolean
    getSubTypesOf: (name: string) => string[]
    getRole(roleName: string): string
}

export interface IGlobalRegistry {
    get(key: string):
        | {
              get: <T>(key: string) => T
              getAllAsList: <T>() => T[]
              set(key: string, value: any): void
          }
        | undefined
    get(key: '@neos-project/neos-ui-contentrepository'): INodeTypesRegistry
    set(key: string, value: any): void
}
