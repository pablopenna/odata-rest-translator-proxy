import axios, { AxiosResponse } from "axios";

export const getMetadata = async (serviceUrl: string): Promise<AxiosResponse | null> => {

    try {
        const metadataUrl = getMetadataUrl(serviceUrl);
        console.log(`Sending request to ${metadataUrl}`);
        const response = await axios.get(metadataUrl); // Will throw exception if status code != 200
        console.log(`Got response ${JSON.stringify(response)}`);
        
        return response
    } catch(error) {
        const fallbackUrl = getFallbackMetadataUrl(serviceUrl);
        console.log(`Sending request to ${fallbackUrl}`);
        const fallbackResponse = await axios.get(fallbackUrl);
        console.log(`Got response ${fallbackResponse}`);

        return fallbackResponse;
    }
}

const getMetadataUrl = (serviceUrl: string) => `${serviceUrl}/$metadata?$format=json`

const getFallbackMetadataUrl = (serviceUrl: string) => `${serviceUrl}?$format=json`