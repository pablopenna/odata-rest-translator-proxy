import '@dotenvx/dotenvx/config'

const REST_SERVICE_BASE_URL_ENV_NAME = 'REST_SERVICE_BASE_URL'
const ODATA_SERVICE_BASE_URL_ENV_NAME = 'ODATA_SERVICE_BASE_URL'

const REST_SERVICE_BASE_URL_DEFAULT = 'https://facade.api'
const ODATA_SERVICE_BASE_URL_DEFAULT = 'https://services.odata.org/V4/Northwind/Northwind.svc'

export const get_env_with_default = (var_name: string, default_value: string) => {
    return process.env[var_name] ?? default_value
}

export const get_rest_service_base_url = (): string => {
    return get_env_with_default(REST_SERVICE_BASE_URL_ENV_NAME, REST_SERVICE_BASE_URL_DEFAULT)
}

export const get_odata_service_base_url = (): string => {
    return get_env_with_default(ODATA_SERVICE_BASE_URL_ENV_NAME, ODATA_SERVICE_BASE_URL_DEFAULT)
}