import { createSelector } from 'reselect'

const dataState = state => state.data
const resultsState = state => state.results

export const dealsSelector = () => createSelector(
  dataState,
  data => data.deals,
)

export const citiesSelector = () => createSelector(
  dataState,
  data => (
    data?.deals?.reduce((acc, deal) => {
      acc.push(deal.departure, deal.arrival)

      return [...new Set(acc)].sort()
    }, [])
  ),
)

export const resultsSelector = () => createSelector(
  resultsState,
  results => results.data,
)

export const sortSelector = () => createSelector(
  resultsState,
  results => results.sorted,
)

