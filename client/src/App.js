/* eslint-disable import/extensions */
import React, { Component } from 'react';
import $ from 'jquery';
import MainComponent from './components/MainComponent.jsx';

// const sampleData = require('./Sample_Data.js');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: [],
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/stats',
      error: (err) => {
        console.log(err, 'err');
      },
      success: (data) => {
        this.setState({
          sample: data,
        });
      },
    });
  }

  render() {
    const { sample } = this.state;
    return (
      <div>
        <MainComponent sample={sample} />
      </div>
    );
  }
}

export default App;
