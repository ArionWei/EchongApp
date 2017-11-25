import axios from 'axios'
const CLASSIFY_URL = '/api/classify'
const HOME_URL = '/api/home'
const CATEGORY_URL = '/api/category'

export const RESULT_OK = 0

export function reqClassify() {
  return axios.get(CLASSIFY_URL)
}

export function reqHome() {
  return axios.get(HOME_URL)
}

export function reqCategory() {
  return axios.get(CATEGORY_URL)
}
