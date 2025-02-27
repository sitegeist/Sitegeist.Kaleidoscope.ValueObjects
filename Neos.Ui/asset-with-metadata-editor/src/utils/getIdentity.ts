import { AssetWithMeta } from '../types'

export const getIdentity = (value: AssetWithMeta) => {
    if (value && value.asset.__identifier) {
        return value.asset.__identifier
    }
    return value
}
