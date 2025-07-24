export function prependConfiguredDomainToImageUri(imageUri?: string, instanceDomain?: string) {
    if (!imageUri || !instanceDomain) {
        return
    }

    // Remove the scheme and split URL into parts
    const imageUriParts = imageUri
        .replace(/^http:\/\//, '')
        .replace(/^https:\/\//, '')
        .split('/')
    // Remove the domain

    console.log('imageUriParts', imageUriParts)
    console.log('instanceDomain', instanceDomain)

    const domain = instanceDomain.replace(/^http:\/\//, '').replace(/^https:\/\//, '')
    imageUriParts.shift()
    // Add the domain from configuration
    imageUriParts.unshift(domain)
    // Re-join the array to a URL and return
    return `https://${imageUriParts.join('/')}`
}
