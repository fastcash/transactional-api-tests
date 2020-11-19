import { mountConfig, mountQuerystring } from './helpers'
import { HTTP_CONFIG_DEFAULT } from './constants'
import axios from 'axios'
import { uuid } from 'uuidv4'

describe('GET /transaction/out/withdrawal/networks', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', '/transaction/out/withdrawal/networks')

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeTruthy()
  })
})

describe('POST /transaction/out/withdrawal/create', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      ProdId: 3566,
      Network: 1,
      Amount: 20.20,
      Currency: 'BRL',
      Description: 'TESTE',
      CustomerName: 'Testador Testante',
      CustomerEmail: '033',
      CustomerDocument: '74942209',
      CustomerMobilePhone: '11973343739',
      CustomerCurrentLatitude: '120',
      CustomerCurrentLongitude: '120',
      TwoFactorValidation: {
        Mode: 1,
        QuestionLabel: 'oi?',
        OfflineQuestionAnswer: 'oi!',
        OnlineVerificationUrl: null
      }
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/out/withdrawal/create', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('POST /transaction/out/withdrawal/code/create', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      ProdId: 3566,
      Network: 1,
      Amount: 20.20,
      Currency: 'BRL',
      Description: 'TESTE',
      CustomerName: 'Testador Testante',
      CustomerEmail: '033',
      CustomerDocument: '74942209',
      CustomerMobilePhone: '11973343739',
      WithdrawBeneficiaryName: 'Receptador Testante',
      WithdrawBeneficiaryDocument: '22222222222'
    }
    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/out/withdrawal/code/create', payload)

    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('POST /transaction/out/withdrawal/process', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const payload = {
      Tid: uuid(),
      Pid: 110,
      QrCodeData: null
    }

    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'post', '/transaction/out/withdrawal/process', payload)
    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})

describe('GET /transaction/out/withdrawal/locations/nearby', () => {
  const http = axios.create(HTTP_CONFIG_DEFAULT)

  it('response should be 200', async () => {
    const querystrings = {
      latitude: '200',
      longitude: '100',
      limit: 2,
      network: 1
    }

    const config = mountConfig(HTTP_CONFIG_DEFAULT, 'get', `/transaction/out/withdrawal/locations/nearby?${mountQuerystring(querystrings)}`)
    const res = await http.request(config)
    const data = res.data
    expect(res.status).toBe(200)
    expect(data.Success).toBeFalsy()
  })
})
