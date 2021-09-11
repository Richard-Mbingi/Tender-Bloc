import React from 'react';
import './App.css';
import Navbar from './components';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar j/>
    </Router>
  );
}

export default App;
