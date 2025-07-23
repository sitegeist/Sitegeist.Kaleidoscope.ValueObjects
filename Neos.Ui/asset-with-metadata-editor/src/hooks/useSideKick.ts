import { selectors } from '@neos-project/neos-ui-redux-store'
import { useMutation } from '@tanstack/react-query'
import { useSelector } from 'react-redux'

import { getAltText } from '../api/getAltText'

export const useSideKick = (onSuccess: (altText: string) => void) => {
    const activeContentDimensions = useSelector(selectors.CR.ContentDimensions.active)
    const language = activeContentDimensions.language ? activeContentDimensions.language[0] : 'en'
    const { mutate: generateAltText, ...rest } = useMutation(
        ({ imageUrl, apiKey }: { imageUrl: string; apiKey: string }) => getAltText(imageUrl, apiKey, language),
        {
            onSuccess: (data) => data && onSuccess(data),
        }
    )

    return { generateAltText, ...rest }
}
