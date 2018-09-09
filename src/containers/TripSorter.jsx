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
import { SORT_BY } from '../actions/types'
import {
  fetchData,
  search,
  resetSearch,
  sortBy,
} from '../actions'
import { dealsSelector, citiesSelector, resultsSelector } from '../selectors'
import Select from '../components/Select'
import ResultList from '../components/ResultList'
import styles from '../styles'

export class TripSorter extends Component {
  static propTypes = {
    deals: PropTypes.array,
    cities: PropTypes.array,
    results: PropTypes.array,
    fetchData: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
    sortBy: PropTypes.func.isRequired,
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
    sorter: null,
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

  handleSort = sorter => () => {
    const { sortBy } = this.props
    this.setState({
      sorter,
    })
    sortBy(sorter)
  }

  handleReset = () => {
    const { resetSearch } = this.props
    this.setState({
      departure: '',
      arrival: '',
      arrivals: [],
      sorter: null,
    })
    resetSearch()
  }

  render() {
    const { cities, classes, results } = this.props
    const { COST, DURATION } = SORT_BY
    const {
      departure,
      arrival,
      arrivals,
      sorter,
    } = this.state

    const searchResetButtonAction = results ? this.handleReset : this.handleSearch
    const searchResetButtonText = results ? 'Reset' : 'Search'
    const searchResetButtonColor = results ? 'primary' : 'secondary'

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="display3" gutterBottom>
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
          <Button
            className={classes.sortButton}
            size="small"
            color="primary"
            variant={sorter === COST ? 'contained' : 'outlined'}
            onClick={this.handleSort(COST)}
            disabled={results === null}
          >
            Cheapest
          </Button>
          <Button
            className={classes.sortButton}
            size="small"
            color="primary"
            variant={sorter === DURATION ? 'contained' : 'outlined'}
            onClick={this.handleSort(DURATION)}
            disabled={results === null}
          >
            Fastest
          </Button>

          <div className="results">
            {
              results && (
                <ResultList
                  results={results}
                />
              )
            }
            <Button
              className={classes.searchResetButton}
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
  connect(mapStateToProps, {
    fetchData, search, sortBy, resetSearch,
  }),
  withStyles(styles),
)(TripSorter)
