import React from 'react'
import { shallow } from 'enzyme'
import Button from '@material-ui/core/Button'
import { SortBar } from '../SortBar'

const baseProps = {
  sorted: null,
  children:
  <Button
    size="small"
    color="primary"
    disabled
  >
    Cheapest
  </Button>,
  sortBy: jest.fn(),
}

describe('<SortBar />', () => {
  it('should render', () => {
    const wrapper = shallow(<SortBar {...baseProps} />)

    expect(wrapper).toBeDefined()
  })
})
