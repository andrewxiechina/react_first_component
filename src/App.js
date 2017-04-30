import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {secondsElapsed: 0};
  }
  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render(){
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Timer />
    );
  }
}

export default App;
