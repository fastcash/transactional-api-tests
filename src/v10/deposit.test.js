import { mountConfig } from './helpers'
import { HTTP_CONFIG_DEFAULT } from './constants'
import axios from 'axios'
import faker from 'faker'
import { uuid } from 'uuidv4'

describe('POST /transaction/in/deposit', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      ProdId: 3566,
      Custom: null,
      Amount: 10.0,
      Description: 'deposito teste',
      PaymentMethod: 1,
      SubPaymentMethod: 5,
      Name: faker.fake('{{name.firstName}} {{name.lastName}}'),
      Email: 'testador@fastcash.dev',
      MobilePhone: '11962333548',
      Document: '16580855827'
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/in/deposit', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})
