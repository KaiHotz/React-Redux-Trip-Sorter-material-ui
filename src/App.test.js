import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { App } from './App'

const initialState = {
  data: [],
  results: [],
}
const mockStore = configureStore()

describe('<TripSorter />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={mockStore(initialState)}>
        <App />
      </Provider>,
    )

    expect(wrapper).toBeDefined()
  })
})
