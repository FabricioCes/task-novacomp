import React, { Component } from 'react';
import '../styles/Search.css';
import ToggleColumns from './ToggleColumns';
import ProductList from './ProductList';
import FilterForm from './FilterForm';
import productsData from '../assets/products.json'; // Importar los productos desde el archivo JSON

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceFrom: '',
      priceTo: '',
      columns: {
        id: true,
        name: true,
        department: true,
        currency: true,
        price: true
      },
      products: productsData, // Asignar los productos importados al estado
      displayedProducts: productsData // Inicialmente todos los productos están visibles
    };
  }

  // Maneja el cambio de precios en los inputs
  onPriceInputChange = (name, value) => {
    this.setState({ [name]: value }, this.filterProducts); // Actualiza el estado y filtra los productos
  };

  // Filtra los productos según el rango de precios
  filterProducts = () => {
    const { priceFrom, priceTo, products } = this.state;
    const filteredProducts = products.filter(product => {
      return (!priceFrom || product.price >= priceFrom) && 
             (!priceTo || product.price <= priceTo);
    });
    this.setState({ displayedProducts: filteredProducts });
  };

  // Maneja el cambio de estado de los checkboxes para mostrar u ocultar columnas
  onCheckboxClick = (name, checked) => {
    this.setState(prevState => ({
      columns: { ...prevState.columns, [name]: checked }
    }));
  };

  render() {
    const { priceFrom, priceTo, columns, displayedProducts } = this.state;

    return (
      <div className="Products">
        <FilterForm 
          priceFrom={priceFrom}
          priceTo={priceTo}
          onPriceInputChange={this.onPriceInputChange} // Pasar el handler
        />

        <ToggleColumns 
          onCheckboxClick={this.onCheckboxClick} // Pasar el handler
          columns={columns} // Pasar las columnas
        />

        <ProductList 
          products={displayedProducts} // Pasar los productos filtrados
          columns={columns} // Pasar la configuración de columnas
        />
      </div>
    );
  }
}
