import { query_params_to_string, QueryParameters } from "@/lambda";

export const adapt_request_query_params = (query_params: QueryParameters): string => {
    const adapted = DefaultStrategy.adapt(query_params);
    return query_params_to_string(adapted);
}

interface QueryParamAdaptationStrategy {
    adapt: (query_params: QueryParameters) => QueryParameters;
}

const DefaultStrategy: QueryParamAdaptationStrategy = {
    adapt: (query_params: QueryParameters) => {
        const {limit, ...rest} = query_params;
        const result = rest;
        if (limit !== undefined) {
            result.$top = limit
        }

        return result
    }
}