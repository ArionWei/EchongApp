import axios from 'axios'
const CLASSIFY_URL = '/api/classify'

export const RESULT_OK = 0

export function reqClassify() {
  return axios.get(CLASSIFY_URL)
}
