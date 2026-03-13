import { handler } from "../src/index"

describe('Lambda handler', () => {
    test('returns 200', async () => {
        const response = await handler(
            {} as unknown as any,
            {} as unknown as any,
            {} as unknown as any,
        );
        expect(response.statusCode).toBe(200);
    });
});
