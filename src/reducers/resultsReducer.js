import _ from 'lodash'
import { SEARCH, SEARCH_RESET, SORT_BY } from '../actions/types'

export const resultsReducer = (state = null, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload
    case SORT_BY.DURATION:
      return _.sortBy(state, result => parseInt(result.duration.h, 10) * 60 + parseInt(result.duration.m, 10))
    case SORT_BY.COST:
      return _.sortBy(state, result => result.cost - (result.cost * result.discount / 100))
    case SEARCH_RESET:
      return null
    default:
      return state
  }
}
