import { forward_request } from "../src/proxy"

describe('Proxy forward request', () => {
    test('returns 200', async () => {
        const response = await forward_request(
            'GET',
            '/Employees/1',
            '?format=json&yes=true'
        );
        expect(response.status).toBe(200);
    });
});
