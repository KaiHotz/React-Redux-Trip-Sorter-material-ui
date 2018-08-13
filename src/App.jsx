import React, { Fragment } from 'react'
import { compose } from 'recompose'
import WithErrors from './hocs/WithErrors'
import TripSorter from './containers/TripSorter'

const App = () => (
  <Fragment>
    <TripSorter />
  </Fragment>
)

export default compose(
  WithErrors,
)(App)
