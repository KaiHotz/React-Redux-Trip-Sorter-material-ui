import axios from 'axios'
import path from 'path'
import { FETCH_DATA } from './types'

const url = path.resolve(__dirname, '/mockedData/response.json')

export const fetchData = () => dispatch => axios.get(url)
  .then(response => {
    dispatch({
      type: FETCH_DATA,
      payload: response.data,
    })
  })
  .catch(error => {
    throw (error)
  })

/*
Without axios and using the fetch api:

export const fetchData = () => dispatch => fetch(url)
  .then(r => r.json())
  .then(json => {
    dispatch({
      type: FETCH_DATA,
      payload: json,
    })
  })
  .catch(error => {
    throw (error)
  })
*/
