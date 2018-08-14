import React from 'react'
import { shallow } from 'enzyme'
import { ResultList } from '../resultList'

const baseProps = {
  classes: { listItem: '' },
}

describe('<ResultList />', () => {
  it('should render', () => {
    const wrapper = shallow(<ResultList {...baseProps} />)

    expect(wrapper).toBeDefined()
  })
})
