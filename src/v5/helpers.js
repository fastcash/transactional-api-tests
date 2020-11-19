const getHeaderAuth = ({ apiKey }) => {
  return {
    'FC-Platform-Token': apiKey
  }
}

const getConfig = (config, method, url, payload) => {
  const newConfig = {
    method: method,
    url: url,
    data: payload,
    ...config
  }

  newConfig.headers = {
    ...config.headers,
    ...getHeaderAuth(newConfig)
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

export { getConfig, mountQuerystring }
