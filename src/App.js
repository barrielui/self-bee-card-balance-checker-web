import React from 'react';
import MetaTags from 'react-meta-tags';
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
  render() {
    return (
    <div className="App">
      <MetaTags>
        <title>Bee Card Balance Checker</title>
        <meta id="meta-description" name="description" content="Simple React website to check bee card balance." />
        <meta id="og-title" property="og:title" content="MyApp" />
        <meta id="og-image" property="og:image" content="path/to/image.jpg" />
      </MetaTags>
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
