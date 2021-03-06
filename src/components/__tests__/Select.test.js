import React from 'react'
import { shallow, mount } from 'enzyme'
import { Select } from '../select'

const baseProps = {
  onChange: jest.fn(),
  options: ['London', 'Amsterdam', 'Paris'],
}

describe('<Select />', () => {
  it('should render', () => {
    const wrapper = shallow(<Select {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should call onChange', () => {
    const wrapper = mount(<Select {...baseProps} />)

    wrapper.find('select').simulate('change')

    expect(baseProps.onChange).toHaveBeenCalled()
  })

  it('should have a Label', () => {
    const props = {
      ...baseProps,
      label: 'customLabel',
    }
    const wrapper = mount(<Select {...props} />)

    expect(wrapper.find('label').text().includes(props.label)).toBeTruthy()
  })

  it('should be disabled', () => {
    const wrapper = mount(<Select disabled {...baseProps} />)

    expect(wrapper.find('select').prop('disabled')).toBe(true)
  })
})
