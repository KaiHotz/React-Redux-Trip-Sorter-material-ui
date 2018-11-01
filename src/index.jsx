import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import blue from '@material-ui/core/colors/blue'
import configureStore from './store'
import App from './App'

const store = configureStore()
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: blue,
  },
  status: {
    danger: 'orange',
  },
  typography: {
    useNextVariants: true,
  },
})
const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Component />
      </MuiThemeProvider>
    </Provider>,
    document.querySelector('.container'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default
    render(App)
  })
}
