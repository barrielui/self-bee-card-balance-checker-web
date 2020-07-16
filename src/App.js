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
    <div className="App">
      <Router>
        <div className="App-header">
          <h1> <Link to="/" className="App-title">Bee Card Balance Checker</Link></h1>
        </div>
        <Switch>
          <Route exact path="/">
            <FormBody />
          </Route>
          <Route exact path="/about">
            <AboutBody />
          </Route>
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
