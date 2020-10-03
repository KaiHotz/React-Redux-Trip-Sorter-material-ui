import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Button from '@material-ui/core/Button'
import { SortBar } from '../SortBar'

const baseProps = {
  children: (
    <Button
      size="small"
      color="primary"
      disabled
    >
      Cheapest
    </Button>
  ),
}

const initialState = {
  data: [],
  results: [],
}
const mockStore = configureStore()

describe('<SortBar />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={mockStore(initialState)}>
        <SortBar {...baseProps} />
      </Provider>,
    )

    expect(wrapper).toBeDefined()
  })
})
