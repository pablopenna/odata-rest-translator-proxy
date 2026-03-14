import { APIGatewayProxyEvent } from "aws-lambda"
import { getBaseTargetUrl, getPathFromEvent } from "."

export const getTargetServiceUrl = (event: APIGatewayProxyEvent): string => {
    return `${getBaseTargetUrl()}${getPathFromEvent(event)}`;
}