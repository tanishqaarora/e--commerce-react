import React, { useContext } from 'react';

import { UserContext } from '../App';

const Navbar = () => {
    const [user] = useContext(UserContext)
    
    return (
        <nav class="bg-white shadow dark:bg-gray-800">
            <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                {user ? (
                    <>
                        <a href="#" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a>                
                        <p className="text-right text-yellow-400">Hello, {user.name} </p>
                        <a href="/logout" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Log out</a> 
                    </>
                ) : (
                    <>
                        <a href="#" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a> 
                        <a href="/register" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Register</a>
                        <a href="/login" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Login</a>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar;