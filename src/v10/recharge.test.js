import { mountConfig } from './helpers'
import { HTTP_CONFIG_DEFAULT } from './constants'
import axios from 'axios'
import { uuid } from 'uuidv4'

describe('POST /transaction/out/recharge/products', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = { Product: 1 }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/out/recharge/products', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('GET /transaction/out/recharge/create', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      ProdId: 3566,
      Product: 3,
      RechargeOptionName: 'NETFLIX',
      CustomerIdentifier: 'PhoneNumber',
      Amount: 10.0,
      Name: 'Johnnie Bayer',
      Email: 'Johnnie.Bayer9@gmail.com',
      Document: '15785543303',
      MobilePhone: '11966720586',
      Description: 'TESTE'
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/out/recharge/create', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})
