import { ProxyResponse } from ".";
import { AxiosResponse } from "axios";

/** Adapt response and return it */
export const adapt_response = (response: AxiosResponse, adapted_path: string): ProxyResponse => {
    const adapted_response_data = adapt_odata_response_data(response.data, adapted_path)
    return {
        statusCode: response.status,
        body: adapted_response_data,
    };
}

/**
 * Adapts OData responses by renaming the "value" field to the entity name.
 * @param {Object} responseData - The JSON response from the OData service.
 * @param {string} url - The URL used for the request.
 * @returns {Object} - The modified object with a named entity key.
 */
function adapt_odata_response_data(responseData: any, path: string): any {
    // 1. Remove trailing slashes
    const parsed_path = path.replace(/\/$/, '');
    
    // 2. Get the last segment (e.g., "Employees(1)" or "Orders")
    const segments = parsed_path.split('/');
    const lastSegment = segments[segments.length - 1];

    // 3. Clean the segment: Remove OData keys like "Employees(1)" -> "Employees"
    const entityName = lastSegment.replace(/\(.*\)/, '');

    // 4. If the "value" key exists, rename it
    if (responseData.hasOwnProperty('value')) {
        const { value, ...metadata } = responseData;
        
        return {
            [entityName]: value,
            ...metadata // Preserves @odata.context, @odata.nextLink, etc.
        };
    }

    return responseData;
}
