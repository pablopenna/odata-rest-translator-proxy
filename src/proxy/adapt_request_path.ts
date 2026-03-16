export const adapt_request_path = (request_url: string): string => {
    return transformODataUrl(request_url)
}

/**
 * Transforms /Collection/ID/SubCollection to /Collection(ID)/SubCollection
 * @param {string} url - The REST URL
 * @returns {string} - The transformed URL
 */
function transformODataUrl(url: string) {
    const parts = url.split('/');
    
    // We iterate through segments starting from the second element
    const transformedParts = parts.map((segment, index) => {
        // Skip empty segments (like the one before the first slash)
        if (!segment) return segment;

        // Heuristic: If the segment is a number or contains a digit (likely an ID)
        // and it's NOT the first segment (which is usually the root or collection)
        const isId = !isNaN(parseInt(segment)) || (index > 0 && /\d/.test(segment));

        if (isId) {
            return `(${segment})`;
        }

        return segment;
    });

    // Join back together, then fix the double slash issue "(ID)/Sub" -> "(ID)Sub"
    // and cleanup any resulting "/(" patterns to just "("
    return transformedParts.join('/').replace(/\/(\()/g, '$1');
}
