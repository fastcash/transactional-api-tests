import { mountConfig, mountQuerystring } from './helpers'
import { HTTP_CONFIG_DEFAULT } from './constants'
import axios from 'axios'
import { uuid } from 'uuidv4'


describe('POST /user/login', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload =
    {
      Email: 'dev+cliente+51@fastcash.com.br',
      Password: '844914'
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/user/login', payload)

    const res = await http.request(config)
    const data = res.data
    console.log('POST /user/login', data)
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /user/balanceById', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const pid = 110
    const clientId = 51
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/user/balanceById/${pid}/${clientId}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /user/balanceByDocument', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const pid = 110
    const document = '11111111111'
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/user/balanceByDocument/${pid}/${document}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /user/detailById', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const pid = 110
    const clientId = 51
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/user/detailById/${pid}/${clientId}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /user/detailByDocument', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const pid = 110
    const document = '11111111111'

    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/user/detailByDocument/${pid}/${document}`)
    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /user/transactionpending', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const pid = 110
    const document = '11111111111'

    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/user/transactionpending/${pid}/${document}`)
    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /user/lasttransactions', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Email: 'testador@fastcash.dev',
      Cellphone: '11975441235',
      Document: '11111111111'
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/user/lasttransactions', payload)
    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /user/getuserconfirmationtoken', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const document = '11111111111'

    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/user/getuserconfirmationtoken/${document}`)
    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('POST /user/listbankaccounts', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Pid: 110,
      ProdId: 3566,
      CustomerDocument: '00541802011',
      ExternalCustomerId: uuid()
    }

    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/user/listbankaccounts', payload)
    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('POST /user/bankaccount', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Pid: 110,
      ProdId: 3566,
      BankAccountId: '666',
      ExternalCustomerId: uuid(),
      CustomerName: 'Testador Testante',
      CustomerDocument: '00541802011',
      BankNumber: '033',
      BankBranchNumber: '1044',
      BankAccountNumber: '74942209',
      BankAccountType: '001',
      BankAccountHolderName: 'Testador Testante',
      BankAccountHolderDocument: '00541802011'
    }

    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/user/bankaccount', payload)
    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('DELETE /user/bankaccount', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const querystrings = {
      bankAccountId: '666',
      pid: 110,
      prodId: 3566
    }

    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'delete', `/user/bankaccount?${mountQuerystring(querystrings)}`)
    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('GET /user/verification/token', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const document = '11111111111'

    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/user/verification/token/${document}`)
    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})
