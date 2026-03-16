import { getMetadata } from "../../src/odata"

describe('Lambda handler', () => {
    test('returns 200', async () => {
        const response = await getMetadata(false);
        expect(response?.status).toBe(200);
    });
});
