import {RECEIVE_CLASSIFY} from './types'
import {reqClassify, RESULT_OK} from '../http/index'

export default {
  getClassify ({commit}) {
    reqClassify().then(response => {
      const result = response.data
      if (result.code == RESULT_OK) {
        const classify = result.data
        commit(RECEIVE_CLASSIFY, {classify})
      }
    })
  }
}
