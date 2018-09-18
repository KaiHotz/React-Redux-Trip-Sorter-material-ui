import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { createStructuredSelector } from 'reselect'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import WithErrors from './hocs/WithErrors'
import SortBar from './containers/SortBar'
import { SORT_BY } from './actions/types'
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
import Select from './components/Select'
import ResultList from './components/ResultList'
import styles from './styles'

export class App extends Component {
  static propTypes = {
    deals: PropTypes.array,
    cities: PropTypes.array,
    results: PropTypes.array,
    fetchData: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  }

  static defaultProps = {
    deals: [],
    cities: [],
    results: null,
  }

  state = {
    departure: '',
    arrival: '',
    arrivals: [],
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData()
  }

  handelDepartureSelect = () => event => {
    const { deals } = this.props
    const arrivals = deals
      .filter(deal => deal.departure === event.target.value)
      .reduce((acc, item) => {
        acc.push(item.arrival)

        return acc
      }, [])

    this.setState({
      departure: event.target.value,
      arrivals: [...new Set(arrivals)],
    })
  }

  handleArrivalSelect = () => event => {
    this.setState({ arrival: event.target.value })
  }

  handleSearch = () => {
    const { search } = this.props
    const { departure, arrival } = this.state
    search(departure, arrival)
  }

  handleReset = () => {
    const { resetSearch } = this.props
    this.setState({
      departure: '',
      arrival: '',
      arrivals: [],
    })
    resetSearch()
  }

  render() {
    const {
      cities,
      classes: {
        card,
        title,
        sortButton,
        searchResetButton,
      },
      results,
    } = this.props

    const {
      departure,
      arrival,
      arrivals,
    } = this.state

    const { COST, DURATION } = SORT_BY

    const searchResetButtonAction = results ? this.handleReset : this.handleSearch
    const searchResetButtonText = results ? 'Reset' : 'Search'
    const searchResetButtonColor = results ? 'primary' : 'secondary'

    return (
      <Card className={card}>
        <CardContent>
          <Typography
            className={title}
            variant="display3"
            gutterBottom
          >
            Trip Sorter
          </Typography>
          <Select
            label="From:"
            onChange={this.handelDepartureSelect()}
            options={cities}
            selectedOption={departure}
            disabled={!!results}
          />
          <Select
            label="To:"
            onChange={this.handleArrivalSelect()}
            options={arrivals}
            selectedOption={arrival}
            disabled={!!results}
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
                <ResultList
                  results={results}
                />
              )
            }
            <Button
              className={searchResetButton}
              size="small"
              color={searchResetButtonColor}
              variant="contained"
              onClick={searchResetButtonAction}
            >
              {searchResetButtonText}
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  deals: dealsSelector(),
  cities: citiesSelector(),
  results: resultsSelector(),
})

export default compose(
  WithErrors,
  connect(mapStateToProps, {
    fetchData, search, resetSearch,
  }),
  withStyles(styles),
)(App)
