import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './normalize.css';
import './App.css';
import PresentationCard from './components/presentationCard'
import StockValue from './components/stockValues';
import MenuDemo from './views/menuDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={PresentationCard}/>
            <Route path="/stock" component={StockValue}/> 
            <Route path="/navigation" component={MenuDemo}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
