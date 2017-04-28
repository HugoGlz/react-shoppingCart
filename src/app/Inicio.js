import React, {Component} from 'react';
import axios from 'axios';
import Menu from './Menu';
import AddressComponent from './AddressComponent';

export default class Inicio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: [],
      error: false
    };
  }

  handleOnChangeText = event => {
    this.setState({
      search: event.target.value
    });
  }

  handleSearchAddress = () => {
    const {search} = this.state;
    console.log(this.state);
    console.log(search);
    axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}`)
      .then(resultado => {
        this.setState({
          results: resultado.data.results[0].address_components
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: true
        });
      });
  }

  render() {
    return (
      <div>
        <Menu/>
        <h1> Esto es el inicio</h1>
        <form>
          <input type="text" placeholder="Escribe aqui tu direccion" onChange={this.handleOnChangeText}/>
          <button type="button" onClick={this.handleSearchAddress}>Buscar</button>
        </form>
        <div>
          buscando: {this.state.search}
        </div>
        <div>
          {this.state.error ? <p style={{color: 'red'}}>Hubo un error</p> : null}
        </div>
        <div>
          {this.state.results.map((obj, index) => {
            return (<AddressComponent
              key={index}
              longName={obj.long_name}
              shortName={obj.short_name}
              types={obj.types}
              />);
          })}
        </div>
      </div>
    );
  }
}
