import React from 'react';
import Cookies from 'universal-cookie';
import './App.css';
import {
  Link
} from "react-router-dom";

const cookies = new Cookies();

class FormBody extends React.Component{
  removeCookies() {
    cookies.remove('printedNumber');
    alert('Your cookies is remove.');
  }
  render() {
    return(
      <span className="App-body">
        <br/>
        <h1>About</h1>
        <span className="About-body">
            <p className="About-content">This website serve as a shortcut to check Bee Card balance.  The request is redirected to and processed by Bee Card official website.  No data is processed nor stored on Heroku server.  Feel free to inspect the source code of the website on <a href="https://github.com/barrielui/self-bee-card-balance-checker-web" target="_blank">GitHub</a>. 
            
            <br/><br/>
            The website uses cookies to store your card number to facilitate balance checking.  Security code is not saved.  Op-out option work in process. Click <a href="/#" onClick={this.removeCookies}>here</a> to remove cookies.
            
            <br/><br/>
            This website is developed in compliance with the <a href="https://beecard.co.nz/Pages/Terms" target="_blank">copyright statement</a> on Bee website.  Usage of the website and further development should comply with those terms.
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
