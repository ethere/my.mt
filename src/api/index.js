import axios from '@/axios.js'

var api = {
  // 最近热门搜索
  searchHotWords (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  // 搜索框列表数据
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  // 首页左侧导航条数据
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  // 首页下方 有格调内容区数据
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  // 产品展示列表数据
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  // 获取热门城市
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  // 最近搜索城市
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  // 获取省份列表
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  // 获取当前位置信息
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  // 获取城市列表
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', {params})
  },
  register (params) {
    return axios.get('/api/meituan/register', {params})
  },
  // 推荐产品列表
  getRecommendProduct () {
    return axios.get('/api/meituan/list/recommend.json')
  },
  // 获取分类列表
  getClassifyList () {
    return axios.get('/api/meituan/list/classify.json')
  },
  // 获取区域列表
  getAreaList () {
    return axios.get('/api/meituan/list/areaList.json')
  },
  // 获取产品详情页信息
  getProductDetail () {
    return axios.get('/api/meituan/product/detail.json')
  }
}

export default api
