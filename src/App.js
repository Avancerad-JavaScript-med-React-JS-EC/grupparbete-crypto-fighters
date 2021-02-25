import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Menu from './components/Menu';
import Nav from './components/Nav';
import Start from './components/Start';
import Status from './components/Status';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Switch>
          <Route path="/start" component={ Start } exact />
          <Route path="/about" component={ About } />
          <Route path="/cart" component={ Cart } />
          <Route path="/" component={ Menu } />
          <Route path="/nav" component={ Nav} />
          <Route path="/status" component={ Status } /> 
        </Switch>
      </div>
    </div>
  )
    
}

export default App;
