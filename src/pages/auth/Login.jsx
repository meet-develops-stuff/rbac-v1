import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginValidation from "../../components/validations/LoginValidation";
import { yupResolver } from "@hookform/resolvers/yup";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    // used for showing error & errorMessage when email OR password are incorrect
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // used for redirecting user to "/dashboard" when email & password are correct
    const navigate = useNavigate();

    // using react-hook-form & Yup for form validation
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(LoginValidation)
    });

    function base64UrlEncode(input) {
        return btoa(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }

    // checks if email & password are correct or not upon form submit
    const onSubmit = (data) => {
        if (data.email.trim() === "test@gmail.com" && data.password.trim() === "Test@123") {
            setError(false);
            setErrorMessage("");
            localStorage.setItem("email", base64UrlEncode(data.email));
            localStorage.setItem("password", base64UrlEncode(data.password));
            navigate("/home");
        } else {
            setError(true);
            setErrorMessage("Incorrect email or password");
        }
    };


    return (
        <div className="flex flex-col sm:flex-row items-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            {/* Image Section */}
            <div className="w-full sm:w-1/2">
                <img
                    src="../images/login-image.jpg"
                    alt="Login"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Form Section */}
            <div className="w-full sm:w-1/2 xl:ml-50 flex justify-center">
                <div className="max-w-md w-full">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>
                        {error ? (
                            <p className="mt-4 text-red-500">{errorMessage}</p>
                        ) : (
                            <p className="mt-4 text-gray-500">
                                Enter email and password to Login
                            </p>
                        )}
                    </div>

                    <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                {...register("email")}
                                type="email"
                                className="w-full rounded-lg border border-gray-500 p-4 text-sm shadow-xs"
                                placeholder="Enter email"
                            />
                            <div className="text-left ml-2 text-red-500">
                                {errors.email && errors.email.message}
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <div className="relative">
                                <input
                                    {...register("password")}
                                    type={showPassword ? "text" : "password"}
                                    className="w-full rounded-lg border border-gray-500 p-4 text-sm shadow-xs"
                                    placeholder="Enter password"
                                />
                                <span className="absolute inset-y-0 right-4 flex items-center">
                                    {showPassword ? (
                                        <EyeOff
                                            onClick={() => setShowPassword(false)}
                                            className='h-5 w-5 cursor-pointer'
                                        />
                                    ) : (
                                        <Eye
                                            onClick={() => setShowPassword(true)}
                                            className='h-5 w-5 cursor-pointer'
                                        />
                                    )}
                                </span>
                            </div>
                            <div className="text-left ml-2 text-red-500">
                                {errors.password && errors.password.message}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center justify-between">
                            <div>
                                {/* <Link to="/">
                                    <button className="bg-blue-500 px-5 py-3 mr-1 text-sm font-medium text-white rounded-lg">
                                        Go back
                                    </button>
                                </Link> */}

                                <span className="text-gray-500">Don't have an account? <span></span> 
                                    <Link to="/signup">
                                    <a href="#" class="text-blue-500 underline">Sign up</a>
                                    </Link>
                                </span>

                            </div>

                            <button
                                type="submit"
                                className="inline-block px-5 ml-1 py-3 text-sm font-medium text-white rounded-4xl bg-blue-500 hover:cursor-pointer hover:bg-blue-600" 
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;