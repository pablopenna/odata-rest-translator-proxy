import '@dotenvx/dotenvx/config'

export const getBaseTargetUrl = (): string => process.env.BASE_URL || ''