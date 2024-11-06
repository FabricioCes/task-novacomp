import React, { Component } from 'react';

export default class ProductList extends Component {
  render() {
    const { products, columns } = this.props;
    
    return (
      <div id="product-list">
        <header>
          <strong>Product List ({products.length} items)</strong>
        </header>
        <table>
          <thead>
            <tr>
              {columns.id && <th>ID</th>}
              {columns.name && <th>Name</th>}
              {columns.department && <th>Department</th>}
              {columns.currency && <th>Currency</th>}
              {columns.price && <th>Price</th>}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                {columns.id && <td>{product.id}</td>}
                {columns.name && <td>{product.name}</td>}
                {columns.department && <td>{product.department}</td>}
                {columns.currency && <td>{product.currency}</td>}
                {columns.price && <td>{product.price}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
