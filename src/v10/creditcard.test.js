import env from '../environment'
import { mountConfig } from './helpers'
import { HTTP_CONFIG_DEFAULT } from './constants'
import axios from 'axios'
import faker from 'faker'
import { uuid } from 'uuidv4'

const transactionsCreated = [];

describe('POST /transaction/in/creditcard', () => {
  const baseConfig = {
    ...HTTP_CONFIG_DEFAULT,
    baseURL: env.V10.PCI_PROXY_BASE_URL
  }
  const http = axios.create(baseConfig)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      ProdId: 3509,
      Custom: "",
      Amount: 1.0,
      Description: "produto",
      Name: "Nome Sobrenome",
      Email: "nome@email.com.br",
      MobilePhone: "11978665215",
      Document: "73452478564",
      CreditCard: {
        Alias: "padrao",
        Brand: "Mastercard",
        ExpirationMonth: "12",
        ExpirationYear: "2021",
        HolderName: "Nome Sobrenome",
        Number: "4242424242424242",
        Cvv: "123"
      },
      Capture: true,
      Installments: 1
    }

    const config = mountConfig(baseConfig, 'post', '/transaction/in/creditcard', payload, 'apikey')

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('POST /transaction/in/creditcard/{token}', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)
  const cardToken = "VOoRn5BS14Y="

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      ProdId: 3509,
      Custom: "",
      Amount: 1.0,
      Description: "produto",
      Name: "Nome Sobrenome",
      Email: "nome@email.com.br",
      MobilePhone: "11978665215",
      Document: "73452478564",
      Capture: true,
      Installments: 1
    }

    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', `/transaction/in/creditcard/${cardToken}`, payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
    transactionsCreated.push(data.Result.Transaction.Tid)
  })
})

describe('POST /transaction/in/creditcard/void', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {

    for (const tid of transactionsCreated) {
      const payload = {
        Tid: tid,
        Pid: 110,
        ProdId: 3509,
        Amount: 1.0
      }

      const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/in/creditcard/void', payload)

      const res = await http.request(config)
      const data = res.data
      expect(res.status).toBe(200)
      expect(data.Success).toBeTruthy()
      transactionsCreated.push(data.Result.Transaction.Tid)
    }

  })
})

describe('GET /user/creditcard/document/{document}', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)
  const document = "73452478564"

  it('response should be 200', async () => {
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/user/creditcard/document/${document}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /user/creditcard/token/{token}', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)
  const cardToken = "VOoRn5BS14Y="

  it('response should be 200', async () => {
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/user/creditcard/token/${cardToken}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})
