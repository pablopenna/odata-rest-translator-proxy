import { get_odata_service_base_url } from "@/utils";
import axios, { AxiosResponse } from "axios";

export const getMetadata = async (json_format: boolean): Promise<AxiosResponse | null> => {

        const metadataUrl = getMetadataUrl(json_format);
        console.log(`Sending request to ${metadataUrl}`);
        const response = await axios.get(metadataUrl); // Will throw exception if status code != 200
        console.log(`Got response ${response}`);
        
        return response
}

const getMetadataUrl = (json_format: boolean): string => {
    const service_url = get_odata_service_base_url();
    return `${service_url}/$metadata${json_format ? '$format=json' : ''}`
}
