import './App.css';

import React, { useState } from 'react'
import Nabvar from './components/Nabvar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);


  return (
    <div>
      <Router>
        <Nabvar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path='/' element={
            <News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country="in" category='general' color='primary' />
          } />
          <Route exact path='/business' element={
            <News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country="in" category='business' color='dark' />
          } />
          <Route exact path='/entertainment' element={
            <News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country="in" category='entertainment' color='warning' />
          } />
          <Route exact path='/general' element={
            <News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country="in" category='general' color='success' />
          } />
          <Route exact path='/health' element={
            <News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country="in" category='health' color='dark' />
          } />
          <Route exact path='/science' element={
            <News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country="in" category='science' color='secondary' />
          } />
          <Route exact path='/sports' element={
            <News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country="in" category='sports' color='warning' />
          } />
          <Route exact path='/technology' element={
            <News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country="in" category='technology' color='primary' />
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default App;