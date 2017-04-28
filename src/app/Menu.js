import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link to={'/products'}>Productos</Link>
        </li>
      </ul>
    );
  }
}
