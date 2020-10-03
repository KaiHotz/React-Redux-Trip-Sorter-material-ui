import React from 'react'
import { useSelector } from 'react-redux'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { resultsSelector } from '../selectors'

import { getTotalCost, getTotalTime } from '../utils'
import { useStyles } from '../styles'

export const ResultList = () => {
  const { listItem } = useStyles()
  const results = useSelector(resultsSelector)

  return (
    <List>
      {
        results.map(result => (
          <ListItem
            className={listItem}
            key={result.reference}
          >
            <ListItemText
              primary={`${result.departure} > ${result.arrival} ${result.cost - ((result.cost * result.discount) / 100)}€`}
              secondary={`${result.transport} ${result.reference} for ${result.duration.h}h${result.duration.m}m`}
            />
          </ListItem>
        ))
      }
      <Divider />
      <ListItem className={listItem}>
        <ListItemText
          primary={`Total ${Math.trunc(getTotalTime(results) / 60)}h${getTotalTime(results) % 60}m ${getTotalCost(results)}€`}
        />
      </ListItem>
    </List>
  )
}
