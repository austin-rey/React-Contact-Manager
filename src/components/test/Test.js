import React, { Component } from 'react';

class Test extends Component {
  //Lifecyle methods
  state = {
    test: 'test'
  };
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  //Used with redux
  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps');
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
