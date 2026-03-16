export const adapt_request_path = (request_url: string): string => {
    return replace_last_slash_with_parentheses(request_url)
}

/** Visible for testing */
export const replace_parentheses_with_slash = (text: string) => {
    // The regex: \( matches opening parenthesis, (.*?) captures content non-greedily, \) matches closing parenthesis
    return text.replace(/\((.*?)\)/g, '/$1');
}

/** Visible for testing */
export const replace_last_slash_with_parentheses = (text: string) => {
    // Replace only the last occurrence of "/something" with "(something)"
    return text.replace(/\/([a-zA-Z0-9_-]+)(?!.*\/[a-zA-Z0-9_-]+)/, '($1)');
}
