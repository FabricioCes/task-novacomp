import React from 'react';
import { shallow } from 'enzyme';

import ProductList from '../../components/ProductList';
import { MOCK_PRODUCT_LIST, MOCK_COLUMNS, MOCK_COLUMNS_LIST } from "../../constants/test-mock";

describe('ProductList component', () => {
  it('are products shown in list', () => {
    const wrapper = shallow(<ProductList products={MOCK_PRODUCT_LIST} columns={MOCK_COLUMNS}/>);
    MOCK_PRODUCT_LIST.forEach(product => {
      expect(wrapper.html()).toContain(`<td>${product.id}</td>`);
      expect(wrapper.html()).toContain(`<td>${product.name}</td>`);
      expect(wrapper.html()).toContain(`<td>${product.department}</td>`);
      expect(wrapper.html()).toContain(`<td>${product.price}</td>`);
      expect(wrapper.html()).toContain(`<td>${product.currency}</td>`);
    });
  });

  it('are correct columns shown in list', () => {
    const product = {
      id: 1,
      name: "Beef - Tongue, Fresh",
      price: 6.14,
      department: "Food",
      currency: '$'
    };

    MOCK_COLUMNS_LIST.forEach(columns => {
      const wrapper = shallow(<ProductList products={[product]} columns={columns}/>);
      for(const column in columns) {
        if(columns[column]) {
          expect(wrapper.html()).toContain(`<td>${product[column]}</td>`);
        }
      }
    })
  });

});
