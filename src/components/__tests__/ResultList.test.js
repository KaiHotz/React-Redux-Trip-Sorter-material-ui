import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ResultList } from '../resultList'

const initialState = {
  data: [],
  results: [],
}
const mockStore = configureStore()

describe('<ResultList />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={mockStore(initialState)}>
        <ResultList />
      </Provider>,
    )

    expect(wrapper).toBeDefined()
  })
})
