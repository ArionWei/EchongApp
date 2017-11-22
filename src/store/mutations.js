import {RECEIVE_CLASSIFY} from './types'

export default {
  [RECEIVE_CLASSIFY] (state, {classify}) {
    state.classify = classify
  }
}
