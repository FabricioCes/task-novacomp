import React, { Component } from 'react';

export default class FilterForm extends Component {
  // Maneja el cambio en los inputs de precio
  onPriceInputChange = (e) => {
    const { name, value } = e.target;
    this.props.onPriceInputChange(name, value); // Llama al handler en el padre (Search)
  };

  render() {
    const { priceFrom, priceTo } = this.props;

    return (
      <div>
        <label htmlFor="name">Filter:</label>
        <input 
          type="number"
          name="priceFrom"
          placeholder="Price from..."
          value={priceFrom} // Asignar el valor actual
          onChange={this.onPriceInputChange} // Asignar el handler de cambio
        />
        <input 
          type="number"
          name="priceTo"
          placeholder="Price to..."
          value={priceTo} // Asignar el valor actual
          onChange={this.onPriceInputChange} // Asignar el handler de cambio
        />
      </div>
    );
  }
}
