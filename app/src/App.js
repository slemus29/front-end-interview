import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './normalize.css';
import './App.css';
import PresentationCard from './components/presentationCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={PresentationCard}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
