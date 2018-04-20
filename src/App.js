import React, { Component } from 'react';
import ButtonTraditionalCSS from './components/ButtonTraditionalCSS'
import ButtonJS from './components/ButtonJS'
import ButtonJSMarked from './components/ButtonJSMarked'
import ButtonAtomicModules from './components/ButtonAtomicModules'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="box">
          <ButtonTraditionalCSS>ButtonTraditionalCSS</ButtonTraditionalCSS>
        </div>
        <div className="box">
          <ButtonJS>ButtonJS</ButtonJS>
        </div>
        <div className="box">
          <ButtonJSMarked>ButtonJSMarked</ButtonJSMarked>
        </div>
        <div className="box">
          <ButtonAtomicModules>ButtonAtomicModules</ButtonAtomicModules>
        </div>
      </div>
    );
  }
}

export default App;
