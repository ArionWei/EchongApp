import axios from 'axios'
const GOODS_URL = '/api2/goods'
const RATINGS_URL = '/api2/ratings'
const SELLER_URL = '/api2/seller'

export const RESULT_OK = 0

export function reqGoods() {
  return axios.get(GOODS_URL)
}

export function reqRatings () {
  return axios.get(RATINGS_URL)
}

export function reqSeller () {
  return axios.get(SELLER_URL)
}