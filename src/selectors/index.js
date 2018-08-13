import { createSelector } from 'reselect'

const dataState = state => state.data

export const dealsSelector = () => createSelector(
  dataState,
  data => data.deals,
)

export const citiesSelector = () => createSelector(
  dataState,
  data => {
    const cities = []
    if (data.deals) {
      data.deals.map(deal => cities.push(deal.departure, deal.arrival))

      return [...new Set(cities)]
    }
  },
)
