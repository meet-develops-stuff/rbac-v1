import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SignupValidation from "../../components/auth/SignupValidation";

const Signup = () => {


    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    // using react-hook-form & yup for validation
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(SignupValidation)
    })

    // logs the form data since the page doesnt have any other functionality upon Sign up
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="flex flex-col sm:flex-row items-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            {/* Image Section */}
            <div className="w-full sm:w-1/2">
                <img
                    src="../images/signup-image.jpg"
                    alt="Login"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Form Section */}
            <div className="w-full sm:w-1/2 xl:ml-50 flex justify-center">
                <div className="max-w-md w-full">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Sign up</h1>

                        <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                    </div>


                    <form className="mx-auto mt-8 mb-0 max-w-md space-y-4" onSubmit={handleSubmit(onSubmit)}>

                        {/* Username */}
                        <div>
                            <label htmlFor="text" className="sr-only">Username</label>

                            <div className="relative">
                                <input
                                    {...register("username")}
                                    type="text"
                                    className="w-full rounded-lg border border-gray-500 p-4 pe-12 text-sm shadow-xs"
                                    placeholder="Enter username"
                                />
                            </div>

                            {/* used for displaying the error message */}
                            <div className="text-left ml-2 text-red-500">
                                {errors.username && errors.username.message}
                            </div>
                        </div>

                        {/* Email ID */}
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <div>
                                <div className="relative">
                                    <input
                                        {...register("email")}
                                        type="email"
                                        className="w-full rounded-lg border border-gray-500 p-4 pe-12 text-sm shadow-xs"
                                        placeholder="Enter email"
                                    />
                                </div>

                                {/* used for displaying the error message */}
                                <div className="text-left ml-2 text-red-500">
                                    {errors.email && errors.email.message}
                                </div>
                            </div>

                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    {...register("password")}
                                    type={showPassword1 ? "text" : "password"}
                                    className="w-full rounded-lg border border-gray-500 p-4 pe-12 text-sm shadow-xs"
                                    placeholder="Enter password"
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    {showPassword1 ? <EyeOff onClick={() => setShowPassword1(false)} className='h-5 w-4 hover:cursor-pointer' />
                                        : <Eye onClick={() => setShowPassword1(true)} className='h-5 w-4 hover:cursor-pointer' />}
                                </span>
                            </div>

                            {/* used for displaying the error message */}
                            {errors.password && (
                                <div className="text-left ml-2 text-red-500">
                                    {errors.password.message}
                                </div>
                            )}
                        </div>

                        {/* CONFIRM PASSWORD */}
                        <div>
                            <label htmlFor="password" className="sr-only">Confirm Password</label>

                            <div className="relative">
                                <input
                                    {...register("confirmPassword")}
                                    type={showPassword2 ? "text" : "password"}
                                    className="w-full rounded-lg border border-gray-500 p-4 pe-12 text-sm shadow-xs"
                                    placeholder="Confirm password"
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    {showPassword2 ? <EyeOff onClick={() => setShowPassword2(false)} className='h-5 w-4 hover:cursor-pointer' />
                                        : <Eye onClick={() => setShowPassword2(true)} className='h-5 w-4 hover:cursor-pointer' />}
                                </span>
                            </div>

                            {/* used for displaying the error message */}
                            {errors.confirmPassword && (
                                <div className="text-left ml-2 text-red-500">
                                    {errors.confirmPassword.message}
                                </div>
                            )}

                        </div>

                        {/* NAVIGATION BUTTONS {GO BACK, LOGIN & SIGN-UP}*/}
                        <div className="flex items-center justify-between">
                      
                                {/* GO BACK BUTTON */}
                                {/* <Link to="/">
                                    <button
                                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 mx-1 text-sm font-medium text-white hover:cursor-pointer"
                                    >
                                        Go back
                                    </button>
                                </Link> */}

                                {/* LOGIN BUTTON */}
                                <span className="text-gray-500">Already have an account? <span></span> 
                                    <Link to="/login">
                                    <a href="#" class="text-blue-500 underline">Login</a>
                                    </Link>
                                </span>

                            {/* SIGN-UP BUTTON */}
                            <button
                                type="submit"
                                className="inline-block px-5 ml-1 py-3 text-sm font-medium text-white rounded-4xl bg-blue-500 hover:cursor-pointer hover:bg-blue-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup