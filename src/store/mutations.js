import {RECEIVE_CLASSIFY,RECEIVE_HOME,RECEIVE_CATEGORY} from './types'

export default {
  [RECEIVE_CLASSIFY] (state, {classify}) {
    state.classify = classify
  },
  [RECEIVE_HOME] (state, {home}) {
    state.home = home
  },
  [RECEIVE_CATEGORY] (state, {category}) {
    state.category = category
  }
}
