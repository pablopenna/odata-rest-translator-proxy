import { get_rest_service_base_url, get_odata_service_base_url } from "../../../src/utils";

describe('Environment variables', () => {
    test('URL envs are available', async () => {
        expect(get_rest_service_base_url()).not.toBeUndefined();
        expect(get_odata_service_base_url()).not.toBeUndefined();
    });
});