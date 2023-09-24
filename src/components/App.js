import "./styles.css";
// import Data from './data'

import React from 'react'
import Navbar from './Navbar';
import { Routes, Route, Outlet } from "react-router-dom";
import Home from './Home';
import Top from './Top';
import Contact from './Contact';

const App = () => {

  return (
    <div id="main">
      <Navbar />
      <div className='container'><Outlet/></div>
    </div>
  )
}


export default App;
