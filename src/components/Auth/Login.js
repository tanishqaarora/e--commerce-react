import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { showToast } from '../../App';
import { UserContext } from '../../App';
import Navbar from '../Layout/Navbar/Navbar';

const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useContext(UserContext);

    const initialState = {id: null, email: '', password: ''}
    const [login, setLogin] = useState(initialState)

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLogin((user) => ({ ...user, [name]: value} ));
    };

    const onSubmit = async() => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                "Content-Type":'application/json',
                "Accept":'application.json'
            }
            })
            const result = await response.json();
            
            if(response.status === 400) {
                showToast(result.message, 'error')
            } else {
                showToast(result.message, 'success')
                setUser(result.user)
                setLogin(initialState);
                navigate('/');
            }
        }
        catch(error) {
            showToast("Registration failed. Please try again.", 'error');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="bg-grey-lighter min-h-screen flex flex-col">
                    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div class="bg-yellow px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 class="mb-8 text-3xl text-center">Login</h1>
                            <input 
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "required"
                                    },
                                    pattern: {
                                        value: /[^\s@]+@[^\s@]+\.[^\s@]+/gi,
                                        message: "invalid email"
                                    }
                                })}
                                value={login.email}
                                onChange={handleInputChange}
                                placeholder="Email" 
                            />
                            {errors.email && <p class="text-red-700">{errors.email.message}</p>}

                            <input 
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "required"
                                    }
                                })}
                                value={login.password}
                                onChange={handleInputChange}
                                placeholder="Password" 
                            />
                            {errors.password && <p class="text-red-700">{errors.password.message}</p>}
                            <button user={user} class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white" >
                                Login
                                <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30" ></div>
                            </button>                        
                        </div>

                        <div class="text-grey-dark mt-6">
                            Don't have an account? 
                            <a class="no-underline border-b border-blue-700 text-blue-700" href="/register">
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </form>
            {user && <Navbar user={user}/>}
        </>
    )
}

export default Login;

