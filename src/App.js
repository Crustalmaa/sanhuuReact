import React, { Component } from 'react';

import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          
        </header>
        <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path ="/login" component = {Login}/>
            <Route path = "/register" component = {Register}/>
        </Switch> 
      </div>
    );
  }
}
export default App;
