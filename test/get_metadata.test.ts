import { getMetadata } from "../src/odata"

describe('Get oData metadata', () => {
    test('returns 200', async () => {
        const response = await getMetadata(false);
        expect(response?.status).toBe(200);
    });
});
