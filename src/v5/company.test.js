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

describe('POST /company', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Document: '14401640000118',
      Name: faker.fake('{{name.firstName}} {{name.lastName}}'),
      TradingName: uuid(),
      Phone: '11976888952',
      Email: 'testador@fastcash.dev',
      BankData: { Name: 'Banco Teste', Agency: '1044', AccountNumber: '7494220-9' },
      ExternalId: uuid().substring(0, 10),
      OnlineCreditEndpoint: 'https://online.fastcash.dev',
      CreditConsultEndpoint: 'https://consult.fastcash.dev',
      CancelEndpoint: 'https://cancel.fastcash.dev'
    }
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'post', '/company', payload)

    const res = await http.request(config)
    expect(res.status).toBe(200)
  })
})

describe('POST /company/activate', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Document: '14401640000118',
      Name: faker.fake('{{name.firstName}} {{name.lastName}}'),
      TradingName: uuid(),
      Phone: '11976888952',
      Email: 'testador@fastcash.dev',
      BankData: { Name: 'Banco Teste', Agency: '1044', AccountNumber: '7494220-9' },
      ExternalId: uuid().substring(0, 10),
      OnlineCreditEndpoint: 'https://online.fastcash.dev',
      CreditConsultEndpoint: 'https://consult.fastcash.dev',
      CancelEndpoint: 'https://cancel.fastcash.dev'
    }
    const config = getConfig(HTTP_CONFIG_DEFAULT, 'post', '/company/activate', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})
