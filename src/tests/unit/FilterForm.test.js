import React from 'react';
import { shallow, mount } from 'enzyme';

import FilterForm from './../../../src/components/FilterForm'

describe('FilterForm component', () => {
  it('is change start price handler binded to input', () => {
    const onPriceInputChange = jest.fn();
    const props = {
      priceFrom: '',
      onPriceInputChange
    };

    const InputComponent = mount(<FilterForm {...props} />).find('input[name="priceFrom"]');
    InputComponent.simulate('change', { target: {
      name: 'priceFrom',
      value: 123
    }});
    expect(onPriceInputChange).toHaveBeenCalledWith('priceFrom', 123);
  });

  it('is correct start price value shown in input', () => {
    const wrapper = shallow(<FilterForm priceFrom='123'/>);
    const input = wrapper.find('input[name="priceFrom"]');
    expect(input.props().value).toBe('123');
  });

  it('is change end price handler binded to input', () => {
    const onPriceInputChange = jest.fn();
    const props = {
      priceTo: '',
      onPriceInputChange
    };

    const InputComponent = mount(<FilterForm {...props} />).find('input[name="priceTo"]');
    InputComponent.simulate('change', { target: {
      name: 'priceTo',
      value: 123
    }});
    expect(onPriceInputChange).toHaveBeenCalledWith('priceTo', 123);
  });

  it('is correct end price value shown in input', () => {
    const wrapper = shallow(<FilterForm priceTo='123'/>);
    const input = wrapper.find('input[name="priceTo"]');
    expect(input.props().value).toBe('123');
  });
});
