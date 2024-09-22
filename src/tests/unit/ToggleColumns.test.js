import React from 'react';
import { mount } from 'enzyme';

import ToggleColumns from '../../components/ToggleColumns';
import { MOCK_COLUMNS } from '../../constants/test-mock';

describe('ToggleColumns component', () => {
  
  const columns = MOCK_COLUMNS

  it('is click checkbox handler binded to column', () => {
    const onCheckboxClick = jest.fn();
    const props = {
      columns,
      onCheckboxClick
    };

    for(const column in columns) {
      const InputCheckboxComponent = mount(<ToggleColumns {...props} />).find(`input[name="${column}"]`);
      InputCheckboxComponent.simulate('change', { target: {name: column, checked: false }});
      expect(onCheckboxClick).toHaveBeenCalledWith(column, false);  
    }
  });

  it('are appropriate checkboxes checked according to columns object', () => {
    const onCheckboxClick = jest.fn();
    const props = {
      columns,
      onCheckboxClick
    };

    for(const column in columns) {
      const InputCheckboxComponent = mount(<ToggleColumns {...props} />).find(`input[name="${column}"]`);
      expect(InputCheckboxComponent.props().checked).toBeTruthy();
    }
  });
});
