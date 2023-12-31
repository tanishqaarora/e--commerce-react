import React from 'react';
import Home from '../Home/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Register from '../Auth/Register';
import Login from '../Auth/Login';

const MainComponent = () => {
    return (
        <>
            <div>
                <Layout>
                    <Routes>
                        <Route path='/' element={ <Home/> }/>
                        <Route path='/register' element={ <Register/> }/>
                        <Route path='/login' element={ <Login/> }/>
                    </Routes>
                </Layout>
            </div>
        </>
    )
}

export default MainComponent;