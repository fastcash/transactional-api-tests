/* eslint-disable new-cap */
import jsSHA from 'jsSHA'
import cryptoRandomString from 'crypto-random-string'

const getFCX = ({ apiKey, apiSecret, method, baseURL, url, data }) => {
  const nonce = cryptoRandomString({ length: 16 })
  const timestamp = new Date().getTime().toString()
  let dataHash = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
  let jsonData = data

  if (data) {
    if (typeof (data) !== 'string') {
      jsonData = JSON.stringify(data)
    }

    const shaObj = new jsSHA('SHA-256', 'TEXT')
    shaObj.update(jsonData)

    dataHash = shaObj.getHash('HEX')
  }

  const digest = (apiKey + nonce + timestamp + method + encodeURIComponent(baseURL + url) + dataHash).toLowerCase()

  const hmacObj = new jsSHA('SHA-512', 'TEXT')
  hmacObj.setHMACKey(apiSecret, 'B64')
  hmacObj.update(digest)
  const signature = hmacObj.getHMAC('HEX')

  const authHeader = (apiKey + ':' + nonce + ':' + timestamp + ':' + signature).toLowerCase()

  // console.log('FCX', authHeader);
  return authHeader
}

const getFCXHeaderAuth = (fcx) => {
  return {
    Authorization: `FCX ${fcx}`
  }
}

const getApiKeyHeaderAuth = (apiKey) => {
  return {
    Authorization: `APIKEY ${apiKey}`
  }
}

const mountConfig = (config, method, url, payload, authMethod = 'fcx') => {
  const newConfig = {
    method: method,
    url: url,
    data: payload,
    ...config
  }

  newConfig.headers = {
    ...config.headers,
    ...(authMethod === 'fcx' && getFCXHeaderAuth(getFCX(newConfig))),
    ...(authMethod === 'apikey' && getApiKeyHeaderAuth(newConfig.apiKey)),
  }

  // console.log(newConfig);
  return newConfig
}

const mountQuerystring = (obj) => {
  let qs = ''
  for (const key of Object.keys(obj)) {
    qs += `${key}=${obj[key]}&`
  }
  qs = qs.substring(0, qs.length - 1)
  return qs
}

export { mountConfig, mountQuerystring }
