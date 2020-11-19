import { mountConfig } from './helpers'
import { HTTP_CONFIG_DEFAULT } from './constants'
import axios from 'axios'
import faker from 'faker'
import { uuid } from 'uuidv4'

describe('POST /transaction/in/validate', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      AmountPaid: 1.0,
      ValidationCode1: 'A',
      ValidationCode2: 'B',
      ValidationCode3: 'C',
      ValidationCode4: 'D',
      Base64Image: null,
      Base64ImageExtension: null,
      PaymentTime: new Date()
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/in/validate', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('POST /transaction/in/addBalance', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      ProdId: 3566,
      Name: faker.fake('{{name.firstName}} {{name.lastName}}'),
      Document: '16580855827',
      Email: 'testador@fastcash.dev',
      Amount: 5.0,
      Description: 'teste'
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/in/addBalance', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('POST /transaction/out/transactionDebit', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Document: '11111111111',
      PinCode: '666',
      Pid: 110
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/out/transactionDebit', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('POST /transaction/out/balanceDebit', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Document: '11111111111',
      PinCode: '666',
      Pid: 110
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/out/balanceDebit', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('POST /transaction/out/billPayment', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      ProdId: 3566,
      Amount: 1.5,
      DueDate: new Date(),
      Name: faker.fake('{{name.firstName}} {{name.lastName}}'),
      Email: 'testador@fastcash.dev',
      Document: '16580855827',
      MobilePhone: '11986687966',
      Description: 'TESTE',
      Barcode: '836500000002 484000577334 002820989008 003971420900'
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/out/billPayment', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /transaction/out/receipt', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const tid = uuid()
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/transaction/out/receipt/${tid}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('POST /transaction/out/ebill', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Base64Image: null,
      Pid: 110,
      ProdId: 3566
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/out/ebill', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('GET /transaction/out/verifyBillPayment', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Pid: 110,
      ProdId: 3566,
      Barcode: '836500000002484000577334002820989008003971420900'
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/transaction/out/verifyBillPayment/${payload.Barcode}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('POST /transaction/out/verifybankaccount', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      BankNumber: '033',
      BankBranchNumber: '1044',
      BankAccountNumber: '7494220-9',
      BankAccountType: '001',
      BankAccountHolderName: 'Testador Testante',
      BankAccountHolderDocument: '00541802011'
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/out/verifybankaccount', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('POST /transaction/out/refund', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      RefundValue: 10.0,
      Description: '',
      Bank: '033',
      BankAgency: '1044',
      BankAccount: '7494220-9',
      BankAccountType: '001',
      BankHolder: 'Testador Testante',
      BankHolderDocument: '00541802011',
      BankHolderEmail: 'testador@fastcash.dev',
      BankHolderPhone: '11954888426'
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/out/refund', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('GET /transaction/getByTid/', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const tid = uuid()
    const pid = 110
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/transaction/getByTid/${tid}/pid/${pid}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('GET /transaction/getByLot/', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const lotId = 1500
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/transaction/getByLot/${lotId}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('POST /transaction/cancelbytid', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const tid = uuid()
    const pid = 110
    // const cpf = "00541802011"
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', `/transaction/cancelbytid/${tid}/pid/${pid}`)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('POST /transaction/in/changePaymentMethod', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 400', () => {
    const payload = {
      Tid: '1588014217403',
      Pid: 110,
      ProdId: 0,
      PaymentMethodId: 5,
      SubPaymentMethodId: 27,
      Wallet: null
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/in/changePaymentMethod', payload)

    http.request(config).catch(error => {
      const res = error.response
      const data = res.data
      expect(res.status).toBe(400)
      expect(data.Success).toBeFalsy()
    })
  })
})

describe('POST /transaction/getByIdentifier', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 400', () => {
    const uuid = '1234t54y6'
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/transaction/getByIdentifier/${uuid}`)

    http.request(config).catch(error => {
      const res = error.response
      const data = res.data
      expect(res.status).toBe(400)
      expect(data.Success).toBeFalsy()
    })
  })
})
