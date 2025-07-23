import axios from 'axios'

export const getAltText = async (imageUrl: string, apiKey: string) => {
    const { data } = await axios.post(
        'https://api.neosidekick.com/api/v1/chat?language=de',
        {
            module: 'alt_tag_generator',
            platform: 'neos',
            user_input: [
                {
                    identifier: 'url',
                    value: [imageUrl],
                },
            ],
        },
        {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }
    )

    return (data?.data?.message?.message as string) || undefined
}
