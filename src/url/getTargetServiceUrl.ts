import { APIGatewayProxyEvent } from "aws-lambda"
import { getBaseTargetUrl } from "./getBaseTargetUrl.js"
import { getPathFromEvent } from "./getPath.js"

export const getTargetServiceUrl = (event: APIGatewayProxyEvent): string => {
    return `${getBaseTargetUrl()}${getPathFromEvent(event)}`;
}