import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import Search from '../../components/Search';
import products from '../../assets/products.json'

const waitForComponentToPaint = async (wrapper) => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    wrapper.update();
  });
};

async function createComponent() {
  const wrapper = mount(<Search products={products} />);
  await waitForComponentToPaint(wrapper)
  return wrapper
}

async function fillPriceFromInput(wrapper, value) {
  act(() => {
    wrapper.find('input[name="priceFrom"]').simulate('change', { target: { value: value, name: 'priceFrom' } })
  });
  return await waitForComponentToPaint(wrapper)
}

async function fillPriceToInput(wrapper, value) {
  act(() => {
    wrapper.find('input[name="priceTo"]').simulate('change', { target: { value: value, name: 'priceTo' } })
  });
  return await waitForComponentToPaint(wrapper)
}

function findProductRows(wrapper) {
  return wrapper.find('#product-list tbody tr')
}

describe('Search component', () => {
  it('products are imported', async () => {
    const wrapper = await createComponent()

    expect(findProductRows(wrapper).length).toBe(30);
  });

  it('is filter by price correct', async () => {
    const wrapper = await createComponent()

    await fillPriceFromInput(wrapper, 10)
    await fillPriceToInput(wrapper, 100)
    expect(findProductRows(wrapper).length).toBe(2);

    await fillPriceFromInput(wrapper, 100)
    await fillPriceToInput(wrapper, 1000)
    expect(findProductRows(wrapper).length).toBe(6);

    await fillPriceFromInput(wrapper, 100)
    await fillPriceToInput(wrapper, 100)
    expect(findProductRows(wrapper).length).toBe(0);
  });

  it('is incorrect filter range returning whole products array', async () => {
    const wrapper = await createComponent()

    await fillPriceFromInput(wrapper, 1000)
    await fillPriceToInput(wrapper, 100)
    await waitForComponentToPaint(wrapper)

    expect(findProductRows(wrapper).length).toBe(30);
  });

});
