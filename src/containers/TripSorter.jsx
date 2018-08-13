import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { createStructuredSelector } from 'reselect'
import _ from 'lodash'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { fetchData } from '../actions'
import { dealsSelector, citiesSelector } from '../selectors'
import Select from '../components/select'
import ResultList from '../components/resultList'
import styles from '../styles'

export class TripSorter extends Component {
  static propTypes = {
    deals: PropTypes.array,
    cities: PropTypes.array,
    fetchData: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  }

  static defaultProps = {
    deals: [],
    cities: [],
  }

  state = {
    departure: '',
    arrival: '',
    arrivals: [],
    results: null,
    sortBy: null,
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
    const { deals } = this.props
    const { departure, arrival } = this.state
    const results = deals.filter(deal => deal.departure === departure && deal.arrival === arrival)

    this.setState({ results })
  }

  handleSort = type => () => {
    const { results } = this.state
    let sortedRsults
    switch (type) {
      case 'cost':
        sortedRsults = _.sortBy(results, o => o.cost - (o.cost * o.discount / 100))
        break
      case 'duration':
        sortedRsults = _.sortBy(results, o => parseInt(o.duration.h, 10) * 60 + parseInt(o.duration.m, 10))
        break
      default:
        return
    }

    this.setState({
      results: sortedRsults,
      sortBy: type,
    })
  }

  handleReset = () => {
    this.setState({
      departure: '',
      arrival: '',
      arrivals: [],
      results: null,
      sortBy: null,
    })
  }

  render() {
    const { cities, classes } = this.props

    const {
      departure,
      arrival,
      arrivals,
      sortBy,
      results,
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
            variant={sortBy === 'cost' ? 'contained' : 'outlined'}
            onClick={this.handleSort('cost')}
            disabled={results === null}
          >
            Cheapest
          </Button>
          <Button
            className={classes.sortButton}
            size="small"
            color="primary"
            variant={sortBy === 'duration' ? 'contained' : 'outlined'}
            onClick={this.handleSort('duration')}
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
})

export default compose(
  connect(mapStateToProps, { fetchData }),
  withStyles(styles),
)(TripSorter)
