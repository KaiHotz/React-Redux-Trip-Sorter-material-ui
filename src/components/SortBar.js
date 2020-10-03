import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  sortSelector,
} from '../selectors'
import {
  sortBy,
} from '../actions'

export const SortBar = ({ children }) => {
  const dispatch = useDispatch()
  const sorted = useSelector(sortSelector)

  return React.Children.map(children, child => React.cloneElement(child, {
    variant: child.props.sortby === sorted ? 'contained' : 'outlined',
    onClick: () => dispatch(sortBy(child.props.sortby)),
  }))
}
