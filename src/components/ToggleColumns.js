import React, { Component } from 'react';

export default class ToggleColumns extends Component {
  // Maneja el evento click de los checkboxes
  onCheckboxClick = (e) => {
    const { name, checked } = e.target;
    this.props.onCheckboxClick(name, checked); // Llama al handler en el padre (Search)
  };
  
  render() {
    const { columns } = this.props;

    return (
      <div className="toggle-columns">
        { 
          Object.keys(columns).map((column, index) => (
            <div key={index}>
              <label>
                {column}
              </label>
              <input 
                type="checkbox"
                name={column}
                checked={columns[column]} // Configurar el estado de cada checkbox
                onChange={this.onCheckboxClick} // Asignar el handler de cambio
              />
            </div>
          ))
        }
      </div>
    );
  }
}
