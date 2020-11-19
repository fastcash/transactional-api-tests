import env from '../environment'
import { getConfig, mountQuerystring } from './helpers'
import axios from 'axios'
import faker from 'faker'
import { uuid } from 'uuidv4'

const HTTP_CONFIG_DEFAULT = {
  apiKey: '',
  apiSecret: '',
  baseURL: env.V5.BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 60000,
}

describe('GET /payment/verifypaymentslip', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const pid = 110
    const barcode = faker.helpers.replaceSymbolWithNumber('#'.repeat(44))
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'get', `/payment/verifypaymentslip/${pid}/barcode/${barcode}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('POST /payment/create', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Pid: 110,
      ProdId: 4871,
      ExternalReference: uuid(),
      Amount: '1.00',
      ClientName: 'Testador',
      ClientEmail: 'testador@fastcash.dev',
      ClientDocument: '82327545080',
      ClientMobilePhone: '11976888952',
      Description: 'Teste',
      Barcode: '23793381286003254337778000063301983150000020000',
      DueDate: '2020-07-13'
    }
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'post', '/payment/create', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /payment/receipt', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const querystrings = {
      pid: 110,
      tid: 'fc57b9a0-caf6-4350-839b-61e963dd7fa5',
    }
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'get', `/payment/receipt?${mountQuerystring(querystrings)}`)

    try {
      const res = await http.request(config)
      fail(new Error(`Deveria ter falhado! ${res.status} - ${JSON.stringify(res.data)}`))
    } catch (error) {
      const res = error.response
      expect(res.status).toBe(406)
    }
  })
})
