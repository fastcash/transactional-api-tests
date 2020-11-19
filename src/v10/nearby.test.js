import { mountConfig, mountQuerystring } from './helpers'
import { HTTP_CONFIG_DEFAULT } from './constants'
import axios from 'axios'


describe('GET /nearby/banks', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const querystrings = {
      latitude: '200',
      longitude: '100'
    }

    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/nearby/banks?${mountQuerystring(querystrings)}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /nearby/atms', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const querystrings = {
      latitude: '200',
      longitude: '100'
    }

    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/nearby/atms?${mountQuerystring(querystrings)}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})
