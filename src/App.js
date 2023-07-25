import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
// import ProductSearch from './components/product/ProductSearch';
// import ShowProducts from './components/product/ShowProducts'

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

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Navbar/>  }/>
          <Route path='/register' element={ <Register/> }/>
          <Route path='/login' element={ <Login/> }/>
        </Routes>
      </div>
      </UserContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App; 
