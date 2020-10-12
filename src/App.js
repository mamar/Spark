import React  from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet'
import welcome from './Component/welcome'
import hello from './Component/hello'

function App () {
  return (
    <div className="App">
    
      <Greet/>
      <welcome/>
      <hello/>
    </div>
  );
}

export default App;


