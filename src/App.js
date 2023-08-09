import React, { createContext, useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainComponent from './components/MainComponent/MainComponent';

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
        <MainComponent/>
      </div>
      </UserContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App; 
