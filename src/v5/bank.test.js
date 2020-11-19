import env from '../environment'
import { getConfig, mountQuerystring } from './helpers'
import axios from 'axios'

const HTTP_CONFIG_DEFAULT = {
  apiKey: '',
  apiSecret: '',
  baseURL: env.V5.BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  timeout: 60000
}

describe('GET /bank/nearbybanks', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const querystrings = {
      latitude: -33.867,
      longitude: 151.195,
      type: 3
    }
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'get', `/bank/nearbybanks?${mountQuerystring(querystrings)}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})
