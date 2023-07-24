import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { showToast } from '../App';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const initialState = { id: null, role: '', name: '', email:'', password:'' }
    const [registration, setRegistration] = useState(initialState);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegistration((registration) => ({ ...registration, [name]: value} ));
    };

    const onSubmit = async() => {
        try {
            let result = await fetch('http://localhost:3003/register', {
            method: 'POST',
            body: JSON.stringify(registration),
            headers: {
                "Content-Type":'application/json',
                "Accept":'application.json'
            }
            })
            result = await result.json();
            showToast("Registered Successfully!", 'success')
            setRegistration(initialState);
            reset();    
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
                            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                            <input 
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="role" 
                                {...register("role", {
                                    required: {
                                        value: true,
                                        message: "required"
                                    }
                                })}
                                value={registration.role}
                                onChange={handleInputChange}
                                placeholder="Role" 
                            />
                            {errors.role && <span class="text-red-700">{errors.role.message}</span>}

                            <input 
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="name"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "required"
                                    }
                                })}
                                value={registration.name}
                                onChange={handleInputChange}
                                placeholder="Name" 
                            />
                            {errors.name && <span class="text-red-700">{errors.name.message}</span>}

                            <input 
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                {...register("email", {
                                    required:  {
                                        value: true,
                                        message: "required"
                                    },
                                    pattern: {
                                        value: /[^\s@]+@[^\s@]+\.[^\s@]+/gi,
                                        message: "invalid email"
                                    }
                                })}
                                value={registration.email}
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
                                    },
                                    maxLength: {
                                        value: 8,
                                        message: "password cannot exceeds 8 characters"
                                    }
                                })}
                                value={registration.password}
                                onChange={handleInputChange}
                                placeholder="Password" 
                            />
                            {errors.password && <p class="text-red-700">{errors.password.message}</p>}


                            <button class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
                                Create Account
                                <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                            </button>
                        </div>

                        <div class="text-grey-dark mt-6">
                            Already have an account? 
                            <a class="no-underline border-b border-blue-700 text-blue-700" href="/login">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </form>
            {/* <ToastContainer /> */}
        </>
    )
}

export default Register;