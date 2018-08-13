import { FETCH_DATA } from './types'
import response from '../mockedData/response.json'

export const fetchData = () => dispatch => {
  dispatch({
    type: FETCH_DATA,
    payload: response,
  })
}
