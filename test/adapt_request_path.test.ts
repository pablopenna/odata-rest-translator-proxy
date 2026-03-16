import { adapt_request_path } from "../src/proxy"

describe('Adapt request url', () => {
    test.each([
        ['/Service/Employees/1', '/Service/Employees(1)'],
        ['/Employees/1', '/Employees(1)'],
        ['/', '/'],
        ['/Employees', '/Employees'],
        ['/Employees/', '/Employees/'],
        ['/Employees/1/Orders', '/Employees(1)/Orders'],
    ])('adapt url', async (input, expected) => {
        const result = adapt_request_path(input);
        expect(result).toEqual(expected);
    });
});