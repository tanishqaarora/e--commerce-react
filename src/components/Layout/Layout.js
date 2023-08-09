import React from 'react';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <>  
            <div className="navbar">
                <Navbar />
                <main className="content">{children}</main>
            </div>
        </>
    )
}

export default Layout;