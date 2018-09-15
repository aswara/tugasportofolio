import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data.json';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Skill from './component/Skill';
import Smooth from 'really-smooth-scroll';


Smooth.shim();

class App extends Component {
  

  render(){
   
    return (
      <div className="isi">
        <Navbar />
        <Header />
        <Skill />
      </div>
    );
  }
}

export default App;
