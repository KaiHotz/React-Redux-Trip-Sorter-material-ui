import React from 'react'
import { shallow } from 'enzyme'
import { App } from '../App'

const baseProps = {
  fetchData: jest.fn(),
  search: jest.fn(),
  resetSearch: jest.fn(),
  classes: {
    card: '',
    title: '',
    sortButton: '',
    searchResetButton: '',
  },
}

describe('<TripSorter />', () => {
  it('should render', () => {
    const wrapper = shallow(<App {...baseProps} />)

    expect(wrapper).toBeDefined()
  })
})
