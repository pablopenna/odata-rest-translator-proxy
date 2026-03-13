import { APIGatewayProxyEvent } from "aws-lambda";

export const getQueryParamsFromEvent = (event: APIGatewayProxyEvent) => event.queryStringParameters // TODO: verify as it might fail when not using the lambda-local

//@ts-ignore
export const getQueryParamsFromEventAsString = (event: APIGatewayProxyEvent): string => event.rawQueryString || '' // TODO: verify as it might fail when not using the lambda-local