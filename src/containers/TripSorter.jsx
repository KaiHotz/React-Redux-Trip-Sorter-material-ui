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
        sortedRsults = results.sort((a, b) => {
          if ((a.cost - (a.cost * a.discount / 100)) > (b.cost - (b.cost * b.discount / 100))) {
            return 1
          }
        })
        break
      case 'duration':
        sortedRsults = results.sort((a, b) => {
          if ((parseInt(a.duration.h, 10) * 60 + parseInt(a.duration.m, 10)) > (parseInt(b.duration.h, 10) * 60 + parseInt(b.duration.m, 10))) {
            return 1
          }
        })
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

    const mainButtonAction = results ? this.handleReset : this.handleSearch
    const mainButtonText = results ? 'Reset' : 'Search'
    const mainButtonColor = results ? 'primary' : 'secondary'

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
          />
          <Select
            label="To:"
            onChange={this.handleArrivalSelect()}
            options={arrivals}
            selectedOption={arrival}
          />
          <Button
            className={classes.button}
            size="small"
            color="primary"
            variant={sortBy === 'cost' ? 'contained' : 'outlined'}
            onClick={this.handleSort('cost')}
            disabled={results === null}
          >
            Cheapest
          </Button>
          <Button
            className={classes.button}
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
              className={classes.mainButton}
              size="small"
              color={mainButtonColor}
              variant="contained"
              onClick={mainButtonAction}
            >
              {mainButtonText}
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
