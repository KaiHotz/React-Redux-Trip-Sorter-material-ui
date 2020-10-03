import axios from 'axios'
import {
  FETCH_DATA,
  SEARCH,
  SEARCH_RESET,
} from './types'

export const fetchData = () => dispatch => axios.get('/api/v1/deals')
  .then(response => {
    dispatch({
      type: FETCH_DATA,
      payload: response.data,
    })
  })
  .catch(error => {
    throw (error)
  })

export const search = (departure, arrival) => (dispatch, getState) => {
  const { data: { deals } } = getState()
  const payload = deals?.filter(deal => deal.departure === departure && deal.arrival === arrival)

  dispatch({
    type: SEARCH,
    payload,
  })
}

export const sortBy = type => dispatch => {
  dispatch({
    type,
  })
}

export const resetSearch = () => dispatch => dispatch({
  type: SEARCH_RESET,
})
