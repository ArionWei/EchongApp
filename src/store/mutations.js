import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_SELLER
} from './types'

export default {
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_SELLER] (state, {seller}) {
    state.seller = seller
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  }
}