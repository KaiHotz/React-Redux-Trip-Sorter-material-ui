import { FETCH_DATA } from '../actions/types'

export const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload
    default:
      return state
  }
}
