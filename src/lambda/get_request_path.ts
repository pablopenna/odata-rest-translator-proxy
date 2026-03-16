import { APIGatewayProxyEvent } from "aws-lambda";


export const get_request_path = (event: APIGatewayProxyEvent): string => {
    //@ts-ignore
    return event.rawPath || '' // TODO: verify as it might fail when not using the lambda-local
}