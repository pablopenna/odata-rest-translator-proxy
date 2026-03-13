import '@dotenvx/dotenvx/config'
import { Context, APIGatewayProxyCallback, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import { getFullTargetUrl } from './url/getFullTargetUrl.js';
import { getTargetServiceUrl } from './url/getTargetServiceUrl.js';
import { getMetadata } from './odata/getMetadata.js';

export const handler = async (event: APIGatewayProxyEvent, context: Context, _callback: APIGatewayProxyCallback): Promise<APIGatewayProxyResult> => {

    // console.log(`Event: ${JSON.stringify(event, null, 2)}`);
    // console.log(`Context: ${JSON.stringify(context, null, 2)}`);

    const response = await getMetadata(getTargetServiceUrl(event))
    
    console.log(`Response Status: ${response?.status}| Data: ${JSON.stringify(response?.data, null, 2)}`);

    return {
        statusCode: response?.status || 500,
        body: JSON.stringify(response?.data ),
    };
};