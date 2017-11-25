import {RECEIVE_CLASSIFY, RECEIVE_HOME, RECEIVE_CATEGORY} from './types'
import {reqClassify, reqHome, reqCategory, RESULT_OK} from '../http/index'

export default {
  getClassify ({commit}) {
    reqClassify().then(response => {
      const result = response.data
      if (result.code == RESULT_OK) {
        const classify = result.data
        commit(RECEIVE_CLASSIFY, {classify})
      }
    })
  },
  getHome ({commit}, cb) {
    reqHome().then(response => {
      const result = response.data
      if (result.code == RESULT_OK) {
        const home = result.data
        commit(RECEIVE_HOME, {home})
        cb()
      }
    })
  },
  getCategory ({commit}, cb) {
    reqCategory().then(response => {
      const result = response.data
      if (result.code == RESULT_OK) {
        const category = result.data
        commit(RECEIVE_CATEGORY, {category})
        cb()
      }
    })
  }
}
