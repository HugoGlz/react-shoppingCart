import React, {Component} from 'react';

export default class Product extends Component {
  handleAddProduct = () => {
    this.props.addProduct(this.props.product);
  }

  render() {
    const {image, name, price, available} = this.props.product;
    let width;
    let widthImg;

    if (this.props.isCart) {
      width = '200px';
      widthImg = '100px';
    } else {
      width = '400px';
      widthImg = '200px';
    }

    return (
      <div
        style={{
          maxWidth: width,
          display: 'flex',
          border: '1px solid #4d4d4d',
          marginBottom: '20px'
        }}
        >
        <div>
          <img
            src={image}
            style={{
              maxWidth: '100%',
              width: widthImg
            }}
            />
        </div>
        <div>
          <p>
            <strong>Nombre:</strong>
            <br/>
            {name}
          </p>
          <p>
            <strong>Precio:</strong>
            <br/>
            ${price}
          </p>
          <p>
            <strong>Disponible</strong>
            <br/>
            {available ? 'Si' : 'No'}
          </p>
          {this.props.isCart ? null : (
            <div>
              <button onClick={this.handleAddProduct}>_Agregar</button>
              <button onClick={() => this.props.addProduct(this.props.product)}>Agregar</button>
            </div>
          )}
          {this.props.isCart ?
            <button onClick={() => this.props.removeProduct(this.props.index)}>Quitar</button> : null
          }
        </div>
      </div>
    );
  }
}
