import { createActionTypes } from '../utils'

export const FETCH_DATA = 'FETCH_DATA'

export const SEARCH = 'SEARCH'

export const SEARCH_RESET = 'SEARCH_RESET'

export const SORT_BY = createActionTypes('SORT_BY', [
  'COST',
  'DURATION',
])

