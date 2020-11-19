import env from '../environment'
import { getConfig } from './helpers'
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

describe('POST /user/login', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = { Email: '', Password: '' }
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'post', '/user/login', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('GET /user/balance', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const clientId = 1
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'get', `/user/balance/${clientId}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /user/balancebydocument', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const document = '22222222222'
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'get', `/user/balancebydocument/${document}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /user/detail', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const document = '22222222222'
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'get', `/user/detail/${document}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})
