const DEV = {
  BASE_URL: 'https://dev.meu.cash',
  PCI_PROXY_BASE_URL: 'https://dev.pci.meu.cash',
  V5: {
    SUFFIX: '/apiv5'
  },
  V10: {
    SUFFIX: '/apiv10'
  },
}
const LOCAL = {
  BASE_URL: 'http://localhost:8003',
  PCI_PROXY_BASE_URL: '',
  V5: {
    SUFFIX: ''
  },
  V10: {
    SUFFIX: ''
  }
}
const PROD = {
  BASE_URL: '',
  PCI_PROXY_BASE_URL: '',
  V5: {
    SUFFIX: '/apiv5'
  },
  V10: {
    SUFFIX: '/apiv10'
  }
}

var getEnvironment = () => {
  function get(env) {
    // console.log(`ENV: ${env}`);
    if (env === 'dev') return DEV
    if (env === 'local') return LOCAL
    if (env === 'prod') return PROD
    return DEV
  }
  const env = get(process.env.ENV)
  env.V10 = {
    BASE_URL: env.BASE_URL + env.V10.SUFFIX,
    PCI_PROXY_BASE_URL: env.PCI_PROXY_BASE_URL + env.V10.SUFFIX,
  }
  env.V5 = {
    BASE_URL: env.BASE_URL + env.V5.SUFFIX,
  }
  return env
}
export default getEnvironment()
