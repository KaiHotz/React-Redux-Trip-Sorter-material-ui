import _ from 'lodash'
import { SEARCH, SEARCH_RESET, SORT_BY } from '../actions/types'

const initialState = {
  data: null,
  sorted: null,
}

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        data: action.payload,
        sorted: null,
      }
    case SORT_BY.DURATION:
      return {
        data: _.sortBy(state.data, result => parseInt(result.duration.h, 10) * 60 + parseInt(result.duration.m, 10)),
        sorted: action.type,
      }
    case SORT_BY.COST:
      return {
        data: _.sortBy(state.data, result => result.cost - (result.cost * result.discount / 100)),
        sorted: action.type,
      }
    case SEARCH_RESET:
      return initialState
    default:
      return state
  }
}

export default resultsReducer

