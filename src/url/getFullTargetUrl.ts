import { APIGatewayProxyEvent } from "aws-lambda"
import { getBaseTargetUrl, getPathFromEvent, getQueryParamsFromEventAsString } from "."

export const getFullTargetUrl = (event: APIGatewayProxyEvent): string => {
    return `${getBaseTargetUrl()}${getPathFromEvent(event)}${getQueryParamsFromEventAsString(event)}`;
}