import React from 'react';
import Cookies from 'universal-cookie';
import './App.css';
import {
  Link
} from "react-router-dom";

const cookies = new Cookies();

class FormBody extends React.Component{
  constructor(props) {
    super(props);
    this.state = {printedNumber: cookies.get('printedNumber'), securityCode: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  
  handleSubmit(event) {
    cookies.set('printedNumber', this.state.printedNumber, { path: '/' });
  }
    
  render() {
    return(
      <span className="App-body">
        <br/>
          <h1>Check Balance</h1>
        <p>Enter your card details to check balance.</p>
      
        <form 
          action="https://beecard.co.nz/Home/Balance" 
          onSubmit={this.handleSubmit}
          target="_blank"
          rel="noopener noreferrer"
          onChange={this.handleChange} 
          method="post" 
          autoComplete="on">
          <div className="Card-form">
            <div className="Input-boxes">
              <input onChange={this.handleChange}
                className="Printed-number" 
                type="text" 
                inputMode="numeric" 
                pattern="[0-9]{9}" 
                title="Card number is 9 digits." 
                name="printedNumber"
                autoComplete="bee-card-number"
                placeholder="Card Number" 
                value={this.state.printedNumber}
                required
              />
                
              <input onChange={this.handleChange}
                className="Security-code" 
                type="password" 
                inputMode="numeric" 
                pattern="[0-9]{3}" 
                title="Security code is 3 digits" 
                name="securityCode" 
                placeholder="Security Code"
                value={this.state.securityCode}
                required
              />
            </div>
            
            <div className="Submit-box">
              <input className="Submit-button" type="submit" value="Check"/>
            </div>
          </div>
        </form>
        <br/>
        
        <Link to="/about" className="App-link">About</Link>
        
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
