import { APIGatewayProxyEvent } from "aws-lambda";

//@ts-ignore
export const getPathFromEvent = (event: APIGatewayProxyEvent): string => event.rawPath || '' // TODO: verify as it might fail when not using the lambda-local