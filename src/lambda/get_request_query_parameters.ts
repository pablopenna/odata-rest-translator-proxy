import { APIGatewayProxyEvent } from "aws-lambda";

export type QueryParameters = Record<string, string|undefined>

export const get_request_query_parameters = (event: APIGatewayProxyEvent): QueryParameters => {
    return event.queryStringParameters || {} // TODO: verify as it might fail when not using the lambda-local
}

export const get_request_query_parameters_as_string = (event: APIGatewayProxyEvent): string => {
    //@ts-ignore
    return event.rawQueryString || '' // TODO: verify as it might fail when not using the lambda-local
}

export const query_params_to_string = (query_params: QueryParameters): string => {
    let result = "";
    for(const param_key in query_params) {
        if(result.length === 0) {
            result = '?';
        } else {
            result = result.concat('&');
        }
        result = result.concat(`${param_key}=${query_params[param_key]}`);
    }
    return result;
}