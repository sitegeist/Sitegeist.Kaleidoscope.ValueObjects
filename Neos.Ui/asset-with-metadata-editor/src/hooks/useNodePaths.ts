import { selectors, store } from '@neos-project/neos-ui-redux-store'
import { useSelector } from 'react-redux'

export const useNodePaths = () => {
    const focusedNodePath = useSelector(selectors.CR.Nodes.focusedNodePathSelector)
    const siteNodeContextPath = useSelector(selectors.CR.Nodes.siteNodeContextPathSelector)

    return {
        focusedNodePath,
        siteNodeContextPath,
    }
}
