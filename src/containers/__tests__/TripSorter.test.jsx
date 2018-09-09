import React from 'react'
import { shallow } from 'enzyme'
import { TripSorter } from '../TripSorter'

const baseProps = {
  fetchData: jest.fn(),
  search: jest.fn(),
  sortBy: jest.fn(),
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
    const wrapper = shallow(<TripSorter {...baseProps} />)

    expect(wrapper).toBeDefined()
  })
})
