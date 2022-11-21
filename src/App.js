import './App.css';

import React, { Component } from 'react'
import Nabvar from './components/Nabvar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 6;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Nabvar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/' element={
              <News setProgress={this.setProgress} key='general' pageSize={this.pageSize} country="in" category='general' color='primary' />
            } />
            <Route exact path='/business' element={
              <News setProgress={this.setProgress} key='business' pageSize={this.pageSize} country="in" category='business' color='dark' />
            } />
            <Route exact path='/entertainment' element={
              <News setProgress={this.setProgress} key='entertainment' pageSize={this.pageSize} country="in" category='entertainment' color='warning' />
            } />
            <Route exact path='/general' element={
              <News setProgress={this.setProgress} key='general' pageSize={this.pageSize} country="in" category='general' color='success' />
            } />
            <Route exact path='/health' element={
              <News setProgress={this.setProgress} key='health' pageSize={this.pageSize} country="in" category='health' color='dark' />
            } />
            <Route exact path='/science' element={
              <News setProgress={this.setProgress} key='science' pageSize={this.pageSize} country="in" category='science' color='secondary' />
            } />
            <Route exact path='/sports' element={
              <News setProgress={this.setProgress} key='sports' pageSize={this.pageSize} country="in" category='sports' color='warning' />
            } />
            <Route exact path='/technology' element={
              <News setProgress={this.setProgress} key='technology' pageSize={this.pageSize} country="in" category='technology' color='primary' />
            } />
          </Routes>
        </Router>
      </div>
    )
  }
}
