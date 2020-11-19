import env from '../environment'
import { getConfig } from './helpers'
import axios from 'axios'
import faker from 'faker'
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

describe('GET /transaction/lotDecrypt', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 500', async () => {
    const payload = { Pid: 110, Lote: 'asdf' }
    try {
      const res = await http.post('/transaction/lotDecrypt', payload)
      fail(new Error(`Deveria ter falhado! ${res.status} - ${JSON.stringify(res.data)}`))
    } catch (error) {
      const res = error.response
      expect(res.status).toBe(500)
    }
  })
})

describe('GET /transaction/getByLot', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const lote = 1
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'get', `/transaction/getByLot/${lote}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('GET /transaction/pending', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const document = '11111111111'
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'get', `/transaction/pending/${document}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /transaction/cashout', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 500', async () => {
    const payload = {
      Redund: {},
      Password: '',
      Email: '',
      Cellphone: ''
    }
    try {
      const res = await http.post('/transaction/cashout', payload)
      fail(new Error(`Deveria ter falhado! ${res.status} - ${JSON.stringify(res.data)}`))
    } catch (error) {
      const res = error.response
      expect(res.status).toBe(500)
    }
  })
})

describe('POST /transaction/create', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 400', async () => {
    const payload = {
      Transaction: {
        Tid: uuid(),
        Pid: 110,
        ProdId: 3501,
        Custom: null,
        Price: 1.5,
        ItemDescription: 'teste',
        PaymentMethod: 1,
        SubPaymentMethod: 1,
        Mode: null,
        Status: 1,
        StatusName: '',
        StatusDescription: '',
        Substatus: null,
        ConfirmationCode: ''
      },
      Client: {
        Name: '',
        Email: '',
        MobilePhoneNumber: '',
        Cpf: ''
      },
      ClientTransactionData: {
        BankAgency: '0666',
        BankAccountNumber: '100666',
        BankAccountHolder: 'Testador',
        BankAccountDocument: '44547526990'
      },
      PaymentData: {
        CreditCard: {
          Number: '789456123465',
          NameOnCard: 'TestadorFastcash',
          ValidThru: '10/2020',
          CVC: '456',
          BankIssuer: 'banco',
          FlagName: null
        },
        Installments: 0
      }
    }
    try {
      const res = await http.post('/transaction/create', payload)
      fail(new Error(`Deveria ter falhado! ${res.status} - ${JSON.stringify(res.data)}`))
    } catch (error) {
      const res = error.response
      expect(res.status).toBe(400)
    }
  })
})

describe('GET /transaction/getwithuserdatabytid', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 404', async () => {
    const tid = '967a182c-ef25-4471-a3a9-5ec5107adfd0'
    const pid = 110
    try {
      const res = await http.get(`/transaction/getwithuserdatabytid/${tid}/pid/${pid}`)
      fail(new Error(`Deveria ter falhado! ${res.status} - ${JSON.stringify(res.data)}`))
    } catch (error) {
      const res = error.response
      expect(res.status).toBe(404)
    }
  })
})

describe('GET /transaction/getByTid', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const tid = '967a182c-ef25-4471-a3a9-5ec5107adfd0'
    const pid = 110
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'get', `/transaction/getByTid/${tid}/pid/${pid}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('POST /transaction/debit', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 400', async () => {
    const payload = {
      Transaction: {
        Tid: uuid(),
        Pid: 110,
        ProdId: 3501,
        Custom: null,
        Price: 1.5,
        ItemDescription: 'teste',
        PaymentMethod: 1,
        SubPaymentMethod: 1,
        Mode: null,
        Status: 1,
        StatusName: '',
        StatusDescription: '',
        Substatus: null,
        ConfirmationCode: ''
      },
      Client: {
        Name: '',
        Email: '',
        MobilePhoneNumber: '',
        Cpf: ''
      },
      ClientTransactionData: {
        BankAgency: '0666',
        BankAccountNumber: '100666',
        BankAccountHolder: 'Testador',
        BankAccountDocument: '44547526990'
      },
      PaymentData: {
        CreditCard: {
          Number: '789456123465',
          NameOnCard: 'TestadorFastcash',
          ValidThru: '10/2020',
          CVC: '458',
          BankIssuer: 'banco',
          FlagName: null
        },
        Installments: 0
      }
    }
    try {
      const res = await http.post('/transaction/debit', payload)
      fail(new Error(`Deveria ter falhado! ${res.status} - ${JSON.stringify(res.data)}`))
    } catch (error) {
      const res = error.response
      expect(res.status).toBe(400)
    }
  })
})

describe('POST /transaction/refund', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 500', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      PartialRefund: false,
      IncludesIndenization: false,
      RefundValue: 10.99,
      RefundValueDescription: 'teste',
      Reason: 'teste',
      Bank: 'banco',
      BankAgency: '0666',
      BankAccount: '100666',
      BankHolder: 'Testador Fastcash',
      BankHolderDocument: '44547526990',
      BankHolderEmail: 'testador@fastcash.dev',
      BankHolderPhone: '11956333215'
    }

    const config = getConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/refund', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('POST /transaction/cancel', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 404', async () => {
    const querystring = {
      tid: 'asdfag',
      pid: 110,
      cpf: '44547526990'
    }
    try {
      const res = await http.post('/transaction/cancel', null, { params: querystring })
      fail(new Error(`Deveria ter falhado! ${res.status} - ${JSON.stringify(res.data)}`))
    } catch (error) {
      const res = error.response
      expect(res.status).toBe(404)
    }
  })
})

describe('POST /transaction/payout', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 400', async () => {
    const payload = {
      Pid: 110,
      ProdId: 3501,
      ExternalReference: uuid(),
      Amount: 1.5,
      DueDate: new Date(),
      Bank: 1,
      BankAgency: '0666',
      BankAccount: '100666',
      BankAccountHolder: 'Testador',
      BankAccountHolderDoc: '44547526990',
      BankAccountFgSavings: false,
      ClientName: 'TestadorFastcash',
      ClientEmail: 'testador@fastcash.dev',
      ClientDocument: '44547526990',
      ClientLandline: '',
      ClientMobilePhone: '11975552345',
      Description: '',
      Barcode: faker.helpers.replaceSymbolWithNumber('#'.repeat(44))
    }
    try {
      const res = await http.post('/transaction/payout', payload)
      fail(new Error(`Deveria ter falhado! ${res.status} - ${JSON.stringify(res.data)}`))
    } catch (error) {
      const res = error.response
      expect(res.status).toBe(400)
    }
  })
})

describe('POST /transaction/addBalance', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      ProdId: 3501,
      CustomerName: 'TestadorFastcash',
      CustomerDocument: '44547526990',
      CustomerEmail: 'testador@fastcash.dev',
      CustomerCellphone: '11975552345',
      Amount: 1.5,
      Reason: 'pq eu quero'
    }
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/addBalance', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})
