import { get_request_query_parameters, get_request_query_parameters_as_string, QueryParameters } from "../../../src/lambda"

describe('Get request query params', () => {
    describe('get_request_query_parameters', () => {
        const getMockEventWithQueryParams = (queryParams: QueryParameters) => ({ "queryStringParameters": queryParams });
        test('extracts query params properly', () => {
            const query_params = {
                "some": "1",
                "dumb": "2",
                "query": "\"aha\"",
                "params": "false",
            }
            const event = getMockEventWithQueryParams(query_params);
            //@ts-ignore
            const extracted = get_request_query_parameters(event);

            expect(extracted).toMatchObject(query_params);
        });

    });

    describe('get_request_query_parameters_as_string', () => {
        const getMockEventWithQueryParams = (queryParams: string) => ({ "rawQueryString": queryParams });

        test('extracts query params properly', () => {
            const query_params = '?some=1&dumb=2&query="aha"&params=false';
            const event = getMockEventWithQueryParams(query_params);
            //@ts-ignore
            const extracted = get_request_query_parameters_as_string(event);

            expect(extracted).toEqual(query_params);
        });
    });
});
