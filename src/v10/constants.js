import env from '../environment'

const HTTP_CONFIG_DEFAULT = {
  apiKey: '',
  apiSecret: '',
  baseURL: env.V10.BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  timeout: 60000
}

export { HTTP_CONFIG_DEFAULT }
