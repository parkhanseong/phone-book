import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  render() {
    return (
      <div>
          <PhoneForm/>
      </div>
    );
  }
}

export default App;