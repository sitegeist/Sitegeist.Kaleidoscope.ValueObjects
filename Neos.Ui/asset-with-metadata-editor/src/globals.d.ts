declare module '@neos-project/react-ui-components'
declare module '@neos-project/react-ui-components/src/SelectBox_Option_MultiLineWithThumbnail'
declare module '@neos-project/react-ui-components/src/MultiSelectBox'
declare module '@neos-project/neos-ui-backend-connector'
declare module '@neos-project/neos-ui-redux-store' {
    type Selectors = {
        CR: {
            ContentDimensions: {
                active: (state: any) => {
                    language: [string]
                }
            }
        }
    }

    export const selectors: Selectors
}
