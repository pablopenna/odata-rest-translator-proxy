import { Context, APIGatewayProxyCallback, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import { get_request_method, get_request_path, get_request_query_parameters_as_string } from '@/lambda';
import { adapt_request_path, forward_request, ProxyResponse } from '@/proxy';
import { adapt_response } from './proxy/adapt_response';

/** Function to be run by the Lambda */
export const handler = async (event: APIGatewayProxyEvent, context: Context, _callback: APIGatewayProxyCallback): Promise<APIGatewayProxyResult> => {

    console.log(`Event: ${JSON.stringify(event, null, 2)}`);
    console.log(`Context: ${JSON.stringify(context, null, 2)}`);

    const response = await main(
        get_request_method(event),
        get_request_path(event), 
        get_request_query_parameters_as_string(event)
    )

    return response;
};

export const main = async (method:string, path: string, query_params: string): Promise<ProxyResponse> => {
    console.log(`Method: ${method}, Path: ${path} , query params: ${query_params}`);
    const response = await forward_request(method, path, query_params);

    return adapt_response(response, adapt_request_path(path));
}