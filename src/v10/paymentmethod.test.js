import { mountConfig, mountQuerystring } from './helpers'
import { HTTP_CONFIG_DEFAULT } from './constants'
import axios from 'axios'

describe('GET /paymentmethod', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', '/paymentmethod')

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /transaction/paymentMethods', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', '/transaction/paymentMethods')

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /transaction/subpaymentMethods', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const paymentMethod = 2
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/transaction/subpaymentMethods/${paymentMethod}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

