import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_SELLER
} from './types'
import {reqGoods, reqRatings, reqSeller, RESULT_OK} from '@/api'

export default {
  getSeller ({commit}, cb) {

    reqSeller().then(response => {
      const result = response.data
      if(result.code==RESULT_OK) {
        const seller = result.data
        commit(RECEIVE_SELLER, {seller})
        cb && cb()
      }
    })
  },

  getRatings ({commit}, cb) {
    reqRatings().then(response => {
      const result = response.data
      if(result.code==RESULT_OK) {
        const ratings = result.data
        commit(RECEIVE_RATINGS, {ratings})
        cb && cb()
      }
    })
  },

  getGoods ({commit}, cb) {
    reqGoods().then(response => {
      const result = response.data
      if(result.code==RESULT_OK) {
        const goods = result.data
        commit(RECEIVE_GOODS, {goods})
        cb && cb()
      }
    })
  }
}