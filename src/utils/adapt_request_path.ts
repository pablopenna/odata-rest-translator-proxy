import '@dotenvx/dotenvx/config'
import { get_odata_service_base_url, get_rest_service_base_url } from '.'

export const adapt_request_path = (request_url: string): string => {
    const parentheses_replaced = replace_parentheses(request_url)
    return parentheses_replaced
}

/** Visible for testing */
export const replace_parentheses = (text: string) => {
    // The regex: \( matches opening parenthesis, (.*?) captures content non-greedily, \) matches closing parenthesis
    return text.replace(/\((.*?)\)/g, '/$1');
}
