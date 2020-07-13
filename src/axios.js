import axios from 'axios'

axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    appkey: 'Aurora_1585711117865'
  }
  return config
})
axios.interceptors.response.use(config => {
  return config.data
})

export default axios
