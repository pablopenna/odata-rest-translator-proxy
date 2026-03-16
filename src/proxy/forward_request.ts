import { get_odata_service_base_url } from "@/utils";
import { adapt_request_path, adapt_request_query_params, ProxyResponse } from ".";
import axios, { AxiosResponse } from "axios";

export const forward_request = async (method: string, path: string, query_params: string): Promise<AxiosResponse> => {

    console.log(`Method: ${method}, Path: ${path} , query params: ${query_params}`);

    const adapted_path = adapt_request_path(path);
    const adapted_query_params = adapt_request_query_params(query_params);
    const adapted_request_url = `${get_odata_service_base_url()}${adapted_path}${adapted_query_params}`

    const rest_response = await axios.request({
        url: adapted_request_url,
        method: method,
    })

    return rest_response;
}
