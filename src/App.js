import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import WithErrors from './hocs/WithErrors'
import { SORT_BY } from './actions/types'
import { SortBar, Select, ResultList } from './components'
import {
  fetchData,
  search,
  resetSearch,
} from './actions'
import {
  dealsSelector,
  citiesSelector,
  resultsSelector,
} from './selectors'
import { useStyles } from './styles'

export const App = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    departure: '',
    arrival: '',
    arrivals: [],
  })
  const deals = useSelector(dealsSelector)
  const cities = useSelector(citiesSelector)
  const results = useSelector(resultsSelector)
  const { COST, DURATION } = SORT_BY

  const {
    card,
    title,
    sortButton,
    searchResetButton,
  } = useStyles()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const handelDepartureSelect = event => {
    const arrivals = deals
      .filter(deal => deal.departure === event.target.value)
      .reduce((acc, item) => {
        acc.push(item.arrival)

        return acc
      }, [])

    setState(prevState => ({
      ...prevState,
      departure: event.target.value,
      arrivals: [...new Set(arrivals)],
    }))
  }

  const handleArrivalSelect = event => {
    setState(prevState => ({ ...prevState, arrival: event.target.value }))
  }

  const handleSearch = () => {
    const { departure, arrival } = state
    dispatch(search(departure, arrival))
  }

  const handleReset = () => {
    setState({
      departure: '',
      arrival: '',
      arrivals: [],
    })
    dispatch(resetSearch())
  }

  return (
    <Card className={card}>
      <CardContent>
        <Typography
          className={title}
          variant="h3"
          gutterBottom
        >
          Trip Sorter
        </Typography>
        <Select
          label="From:"
          onChange={handelDepartureSelect}
          options={cities}
          selectedOption={state.departure}
          disabled={!!results}
        />
        <Select
          label="To:"
          onChange={handleArrivalSelect}
          options={state.arrivals}
          selectedOption={state.arrival}
          disabled={!!results || state.departure === ''}
        />
        <SortBar>
          <Button
            className={sortButton}
            size="small"
            color="primary"
            sortby={COST}
            disabled={!results}
          >
            Cheapest
          </Button>
          <Button
            className={sortButton}
            size="small"
            color="primary"
            sortby={DURATION}
            disabled={!results}
          >
            Fastest
          </Button>
        </SortBar>
        <div className="results">
          {
            results && (
              <ResultList />
            )
          }
          <Button
            className={searchResetButton}
            size="small"
            color={results ? 'primary' : 'secondary'}
            variant="contained"
            onClick={results ? handleReset : handleSearch}
          >
            {results ? 'Reset' : 'Search'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default WithErrors(App)
