import { adapt_request_query_params } from "../../../src/proxy"

describe('Adapt request Query Params', () => {
    test.each([
        [{limit: 2}, '?$top=2'],
        [{foo: "bar", limit: 2, "something-random": true}, '?foo=bar&something-random=true&$top=2'], // replaced values are placed last
    ])('adapt url', async (input, expected) => {
        const result = adapt_request_query_params(input);
        expect(result).toEqual(expected);
    });
});