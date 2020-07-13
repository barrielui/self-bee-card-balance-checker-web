import React from 'react';
import './App.css';
import FormBody from './FormBody';
import AboutBody from './AboutBody';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    document.title = "Bee Card Balance Checker"
  }
  
  render() {
    return (
      <span className="App">
      <Router>
        <span className="App-header">
          <h1> <Link to="/" className="App-title">Bee Card Balance Checker</Link></h1>
        </span>
        
        <Switch>
          <Route exact path="/">
            <FormBody />
          </Route>
          
          <Route exact path="/about">
            <AboutBody />
          </Route>
        </Switch>
        </Router>
      </span>
      
    );
  }
}

export default App;
