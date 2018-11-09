import React, { Component } from 'react';
import OCR from './components/tesseract.js'
import image from './example_license2.jpg'


import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
        <OCR example={image} ></OCR>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> j
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">

          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
