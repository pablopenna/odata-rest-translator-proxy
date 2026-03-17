import { adapt_response } from "../../../src/proxy"

describe('Adapt request url', () => {
    test.each([
        // 1.- EntitySet
        [
            {
                path: '/Employees', 
                response: {
                    status: 200,
                    data: {
                        value: ["1", "2"]
                    }
                }
            }, 
            {
                statusCode: 200,
                body: {
                    Employees: ["1", "2"]
                }
            }
        ],
        // 2.- Entity
        [
            {
                path: '/Employees/1', 
                response: {
                    status: 200,
                    data: {
                        foo: "bar"
                    }
                }
            }, 
            {
                statusCode: 200,
                body: {
                    foo: "bar"
                }
            }
        ],
    ])('adapt url', async (input, expected) => {
        //@ts-ignore
        const result = adapt_response(input.response, input.path);
        expect(result).toEqual(expected);
    });
});