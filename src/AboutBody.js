import React from 'react';
import './App.css';
import {
  Link
} from "react-router-dom";

class FormBody extends React.Component{
  render() {
    return(
      <span className="App-body">
        <br/>
        <h1>About</h1>
        <span className="About-body">
            <p className="About-content">This website serve as a shortcut to check Bee Card balance.  The request is redirected to and processed by Bee Card official website.  No data is processed nor stored on Heroku server.  Feel free to inspect the source code of the website on <a href="https://github.com/barrielui/self-bee-card-balance-checker-web">GitHub</a>. 
            
            <br/><br/>
            This website is developed in compliance with the <a href="https://beecard.co.nz/Pages/Terms">copyright statement</a> on Bee website.  Usage of the website and further development should comply with those terms.
            </p>
            
            
        </span>
        <Link to="/" className="App-link">Return</Link>
        
        <a
          className="App-link"
          href="https://beecard.co.nz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bee Homepage
        </a>
      </span>
    );
  }
}

export default FormBody;
