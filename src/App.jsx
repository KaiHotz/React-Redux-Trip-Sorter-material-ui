import React from 'react'
import { compose } from 'recompose'
import WithErrors from './hocs/WithErrors'
import TripSorter from './containers/TripSorter'

const App = () => (
  <TripSorter />
)

export default compose(
  WithErrors,
)(App)
