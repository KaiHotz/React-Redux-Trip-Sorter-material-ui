import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { getTotalCost, getTotalTime } from '../utils'
import styles from '../styles'

export const ResultList = ({ results, classes: { listItem } }) => (
  <List>
    {
      results.map(result => (
        <ListItem
          className={listItem}
          key={result.reference}
        >
          <ListItemText
            primary={`${result.departure} > ${result.arrival} ${result.cost - (result.cost * result.discount / 100)}€`}
            secondary={`${result.transport} ${result.reference} for ${result.duration.h}h${result.duration.m}m`}
          />
        </ListItem>
      ))
    }
    <Divider />
    {
      <ListItem className={listItem}>
        <ListItemText
          primary={`Total ${Math.trunc(getTotalTime(results) / 60)}h${getTotalTime(results) % 60}m ${getTotalCost(results)}€`}
        />
      </ListItem>
    }
  </List>
)

ResultList.propTypes = {
  results: PropTypes.array,
  classes: PropTypes.object.isRequired,
}

ResultList.defaultProps = {
  results: [],
}

export default withStyles(styles)(ResultList)
