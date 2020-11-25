// placeholder for runtime config, which is modified when starting Docker container
// and will overwrite build-time config
const runtimeConfig = {
  placeholder: {},
}

export default {
  publicBaseUrl: process.env.BASE_URL,
  apiBaseUrl: process.env.VUE_APP_BASE_API,
  ...runtimeConfig,
}
