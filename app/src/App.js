import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './normalize.css';
import './App.css';
import PresentationCard from './components/presentationCard'
import MenuDemo from './views/menuDemo';
import StockDemo from './views/stockDemo';
import StorageDemo from './views/storageDemo';
import languageSelector from './i18n/languageManager';
import LangToggle from './components/langToggle';

class App extends Component {
  constructor(props){
      super(props);
      this.state= {
          languageLoaded: false,
          languagePairs: null
      }
      this.getLanguageManager = this.getLanguageManager.bind(this);

  }
  componentDidMount(){
    this.getLanguageManager("en");
  }

  getLanguageManager(lang){
    languageSelector(lang).then((i18n)=>{
      this.setState({
        languageLoaded: true,
        languagePairs: i18n
      })
    })
  }

  render() {
    const parentComponent = this.state.languageLoaded ?
    (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={()=><PresentationCard i18n={this.state.languagePairs}/>}/>
            <Route path="/stock" render={()=><StockDemo i18n={this.state.languagePairs} />}/> 
            <Route path="/navigation" render={() => <MenuDemo i18n={this.state.languagePairs}/>}/>
            <Route path="/storage" render={()=> <StorageDemo i18n={this.state.languagePairs}/>}/>
          </Switch>
        </Router>
        <LangToggle labelVal1={this.state.languagePairs("spanish")} labelVal2={this.state.languagePairs("english")}
           funVal1={()=>this.getLanguageManager("es")} funVal2={()=>this.getLanguageManager("en")}/>
      </div>
    ) : 
    <div>Loading Language</div>
    return parentComponent;
  }
}

export default App;
