import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {printedNumber: '', securityCode: ''};
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  
  componentDidMount() {
    document.title = "Bee Card Balance Checker"
  }
  
  render() {
  return (
    <header>
    <span className="App">
      <span className="App-header">
        <h1>Bee Card Balance Checker</h1>
      </span>
        
      <span className="App-body">
        <br/>
        <h1>Check Balance</h1>
        <p>Enter your card details to check balance.</p>
      
       <form action="https://beecard.co.nz/Home/Balance" onChange={this.handleChange}method="post" autoComplete="on">
        <div className="Card-form">
          <div className="Input-boxes">
            <input onChange={this.handleChange}
              className="Printed-number" 
              type="text" 
              inputMode="numeric" 
              pattern="[0-9]{9}" 
              title="Card number is 9 digits." 
              name="printedNumber" 
              placeholder="Card Number" 
              value={this.state.printedNumber}
              autoComplete="on" 
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
              autoComplete="off" 
              required
            />
          </div>
          
          <div className="Submit-box">
            <input className="Submit-button" type="submit" value="Check"/>
          </div>
        </div>
      </form>
      
      <br/>
        <a
          className="App-link"
          href="https://beecard.co.nz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bee Homepage
        </a>
        
        
        
      </span>
        
        
      
      

    </span>
    </header>
  );
  }
}

export default App;
