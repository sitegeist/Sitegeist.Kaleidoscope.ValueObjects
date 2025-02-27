export const debounce = (timer: number) => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    return (fn: () => void) => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
            fn()
        }, timer)
    }
}
