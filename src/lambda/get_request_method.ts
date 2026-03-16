import { APIGatewayProxyEvent } from "aws-lambda";


export const get_request_method = (event: APIGatewayProxyEvent): string => {
    //@ts-ignore
    return event.requestContext.http.method || '' // TODO: verify as it might fail when not using the lambda-local
}