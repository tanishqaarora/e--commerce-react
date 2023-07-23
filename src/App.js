import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Navbar/> }/>
        <Route path='/register' element={ <Register/> }/>
      </Routes>
    </div>
  );
}

export default App;
