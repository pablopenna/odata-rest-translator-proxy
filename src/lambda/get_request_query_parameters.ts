import { APIGatewayProxyEvent } from "aws-lambda";

export const get_request_query_parameters = (event: APIGatewayProxyEvent) => {
    return event.queryStringParameters // TODO: verify as it might fail when not using the lambda-local
}

export const get_request_query_parameters_as_string = (event: APIGatewayProxyEvent): string => {
    //@ts-ignore
    return event.rawQueryString || '' // TODO: verify as it might fail when not using the lambda-local
}