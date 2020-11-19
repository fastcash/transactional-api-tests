import env from '../environment'
import { getConfig } from './helpers'
import axios from 'axios'
import { uuid } from 'uuidv4'

const HTTP_CONFIG_DEFAULT = {
  apiKey: '',
  apiSecret: '',
  baseURL: env.V5.BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  timeout: 60000
}

describe('GET /confirmation', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Confirmation: {
        Tid: uuid(),
        Pid: 110,
        ProdId: 3566,
        F1: '',
        F2: '',
        F3: '',
        F4: '',
        PaidDate: '2020-07-17',
        Value: 1.0,
        Observations: '',
        Flags: 'PaidByPhone'
      }
    }
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'post', '/confirmation', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('POST /confirmation/addreceiptbase64', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      Base64Image: null,
      FileName: 'teste.jpg'
    }
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'post', '/confirmation/addreceiptbase64', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('GET /confirmation/addreceipt', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const pid = 110
    const tid = uuid()
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'post', `/confirmation/addreceipt/${pid}/tid/${tid}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})
