import { getBaseTargetUrl } from "../src/url/getBaseTargetUrl"

describe('Environment variables', () => {
    test('URL env variable is available', async () => {
        expect(getBaseTargetUrl()).not.toBeUndefined();
    });
});