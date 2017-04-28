import React, {Component} from 'react';
import Menu from './Menu';
import Product from './Product';
import axios from 'axios';

export default class Products extends Component {

  constructor(props) {
    super(props);

    this.state({
      list: [],
      cart: [],
      loading: true
    });
  }

  componentWillMount() {
    axios
      .get('http://royal-api-dev.mellow.online/api/Products?access_token=PvlYgnUvNracIs5fqG3ni3zmk30qW85j8p46YzTi0jES58tlgDjYC1esohTxjfNR')
      .then(result => {
        this.setState({
          list: result.data,
          loading: false
        });
      });
  }

  addProduct = product => {
    this.setState({
      cart: this.state.cart.concat([product])
    });
  }

  removeProduct = index => {
    const newCartList = this.state.cart.concat([]);
    newCartList.splice(index, 1);
    this.setState({
      cart: newCartList
    });
  }

  render() {
    return (
      <div>
        <Menu/>
        <h1>Lista de Productos</h1>
        {this.state.loading ? <p>cargando...</p> : null}
        <div style={{display: 'flex'}}>
          <div>
            {this.state.list.map((obj, index) => {
              return (<Product
                key={index}
                index={index}
                product={obj}
                addProduct={this.addProduct}
                />);
            })}
          </div>
          <div style={{marginLeft: '30px'}}>
            <h3>Carrito</h3>
            {this.state.cart.map((obj, index) => {
              return (<Product
                key={index}
                index={index}
                product={obj}
                isCart={'true'}
                removeProduct={this.removeProduct}
                />);
            })}
          </div>
        </div>
      </div>
    );
  }
}
