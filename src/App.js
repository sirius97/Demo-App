import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import './App.css';
import MenuBar from './Components/MenuBar/MenuBar';
import Home from './Components/Home/Home';
import Menu2 from './Components/Menu2/Menu2';
import SearchBar from './Components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <SearchBar />
        <Route path='/Demo-App/'  component = {Home} />
        <Route path = '/menu2' exact component = {Menu2}/>
        <Redirect to = '/Demo-App/' />
      </div>
    );
  }
}

export default App;
