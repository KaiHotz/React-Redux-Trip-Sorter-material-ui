import { createSelector } from 'reselect'

const dataState = state => state.data

export const dealsSelector = () => createSelector(
  dataState,
  data => data.deals,
)

export const citiesSelector = () => createSelector(
  dataState,
  data => (
    data.deals && data.deals.reduce((acc, deal) => {
      acc.push(deal.departure, deal.arrival)

      return [...new Set(acc)].sort()
    }, [])
  ),
)
