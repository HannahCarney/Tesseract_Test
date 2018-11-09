import Tesseract from 'tesseract.js'
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';


export default class OCR extends React.PureComponent {


  static propTypes = {
    example: PropTypes.img.isRequired
  };

  constructor(props) {
    super(props);
    // this.tesseract = Tesseract.create({
    //   workerPath: '../lib/worker.js',
    //   langPath: '../lib/eng.traineddata.gz',
    //   corePath: '../lib/tesseract.js',
    // });
    this.recognizeText();
  }



  recognizeText() {
    Tesseract.recognize(this.props.example)
      .progress(function  (p) { 
        console.log(p)    
      })
      .then(function (result) {
        console.log(result)
        console.log(result.text)
      })
    // this.tesseract.recognize(this.props.example)
    // .progress(function  (p) { console.log('progress', p)    })
    // .then(function (result) { console.log('result', result) })
  }

  // console.log(tesseract)

  render() {
    return (
      <div>
        <img src={this.props.example} />
      </div>
    )
  };

}



