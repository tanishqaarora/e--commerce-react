import React from 'react';

const Navbar = () => {
    return (
        <nav class="bg-white shadow dark:bg-gray-800">
            <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <a href="#" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a>
        
                <a href="/register" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Register</a>
        
                <a href="/login" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Login</a>        
            </div>
        </nav>
    )
}

export default Navbar;