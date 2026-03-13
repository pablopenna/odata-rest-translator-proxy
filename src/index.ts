import { Context, APIGatewayProxyCallback, APIGatewayEvent, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent, context: Context, _callback: APIGatewayProxyCallback): Promise<APIGatewayProxyResult> => {

    console.log(`Event: ${JSON.stringify(event, null, 2)}`);
    console.log(`Context: ${JSON.stringify(context, null, 2)}`);

    await delay(100);
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'hello world',
        }),
    };
};

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));