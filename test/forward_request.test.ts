import { forward_request } from "../src/proxy"

describe('Proxy forward request', () => {
    describe('Single entity', () => {
        test('returns 200', async () => {
            const response = await forward_request(
                'GET',
                '/Employees/1',
                '?format=json&yes=true'
            );
            expect(response.status).toBe(200);
        });
    });

    describe('EntitySet', () => {
        test('returns 200', async () => {
            const response = await forward_request(
                'GET',
                '/Employees/',
                '?$top=2'
            );
            expect(response.status).toBe(200);
        });
    });
});
