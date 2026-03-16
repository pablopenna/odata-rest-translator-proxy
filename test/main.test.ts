import { main } from "../src/index"

describe('Lambda handler', () => {
    test('returns 200', async () => {
        const response = await main(
            'GET',
            '/Employee/1',
            '?format=json&yes=true'
        );
        expect(response.statusCode).toBe(200);
    });
});
