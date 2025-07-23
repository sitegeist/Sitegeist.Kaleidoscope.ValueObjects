import { useMutation } from '@tanstack/react-query'

import { getAltText } from '../api/getAltText'

export const useSideKick = (onSuccess: (altText: string) => void) => {
    const { mutate: generateAltText, ...rest } = useMutation(
        ({ imageUrl, apiKey }: { imageUrl: string; apiKey: string }) => getAltText(imageUrl, apiKey),
        {
            onSuccess: (data) => data && onSuccess(data),
        }
    )

    return { generateAltText, ...rest }
}
