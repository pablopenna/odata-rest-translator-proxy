import { APIGatewayProxyEvent } from "aws-lambda"
import { getBaseTargetUrl } from "./getBaseTargetUrl.js"
import { getPathFromEvent } from "./getPath.js"
import { getQueryParamsFromEventAsString } from "./getQueryParams.js"

export const getFullTargetUrl = (event: APIGatewayProxyEvent): string => {
    return `${getBaseTargetUrl()}${getPathFromEvent(event)}${getQueryParamsFromEventAsString(event)}`;
}