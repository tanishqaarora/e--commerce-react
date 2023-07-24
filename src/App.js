import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';

export const showToast = (message, type) => {
  if(type === 'success') {
    return toast.success(
      <div>
        <p>{message}</p>
      </div>
    );
  }
  if(type === 'error') {
    return toast.error(
      <div>
        <p>{message}</p>
      </div>
    );
  }
  else {
    return toast(
      <div>
        <p>{message}</p>
      </div>
    );
  }
  
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Navbar/> }/>
        <Route path='/register' element={ <Register/> }/>
        <Route path='/login' element={ <Login/> }/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
