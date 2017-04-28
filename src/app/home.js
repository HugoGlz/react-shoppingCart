import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Inicio from './Inicio';
import Blog from './Blog';
import Products from './Products';

export class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Inicio}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/products" component={Products}/>
        </div>
      </Router>
    );
  }
}
