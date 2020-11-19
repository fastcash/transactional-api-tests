import { mountConfig } from './helpers'
import { HTTP_CONFIG_DEFAULT } from './constants'
import axios from 'axios'
import faker from 'faker'
import { uuid } from 'uuidv4'

describe('POST /transaction/in/transfer', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      ProdId: 3566,
      Custom: null,
      Amount: 10.0,
      Description: 'transferencia teste',
      PaymentMethod: 2,
      SubPaymentMethod: 5,
      Name: faker.fake('{{name.firstName}} {{name.lastName}}'),
      Email: 'testador@fastcash.dev',
      MobilePhone: '11962333548',
      Document: '00541802011',
      BankAgency: '1044',
      BankAccountNumber: '7494220-9',
      BankAccountHolderName: 'Testador Testante',
      BankAccountDocument: '00541802011'
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/in/transfer', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('POST /transaction/out/transfer', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Pid: 110,
      ProdId: 3566,
      Tid: uuid(),
      Amount: 20.20,
      DueDate: new Date(),
      Bank: '033',
      BankAgency: '1044',
      BankAccount: '74942209',
      BankAccountHolder: 'Testador Testante',
      BankAccountHolderDoc: '00541802011',
      BankAccountFgSavings: false,
      Name: 'Testador Testante',
      Email: 'testador@fastcash.dev',
      Document: '00541802011',
      MobilePhone: '11973343739',
      Description: 'TESTE',
      BankAccountType: '005'
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/out/transfer', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})
