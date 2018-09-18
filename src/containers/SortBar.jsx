import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { createStructuredSelector } from 'reselect'
import {
  sortSelector,
} from '../selectors'
import {
  sortBy,
} from '../actions'

export class SortBar extends Component {
  static propTypes = {
    sorted: PropTypes.string,
    children: PropTypes.node.isRequired,
    sortBy: PropTypes.func.isRequired,
  }

  static defaultProps = {
    sorted: null,
  }

  handleSort = sorter => () => {
    const { sortBy } = this.props
    sortBy(sorter)
  }

  render() {
    const { children, sorted } = this.props
    const sortButton = React.Children.map(children, child => React.cloneElement(child, {
      variant: child.props.sortby === sorted ? 'contained' : 'outlined',
      onClick: this.handleSort(child.props.sortby),
    }))

    return <div>{sortButton}</div>
  }
}

const mapStateToProps = createStructuredSelector({
  sorted: sortSelector(),
})

export default compose(
  connect(mapStateToProps, { sortBy }),
)(SortBar)
