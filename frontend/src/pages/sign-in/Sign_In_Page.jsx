import React from "react";
import axios from "axios";
import SignInSocials from "./Sign_In_Socials";
import { useNavigate } from "react-router-dom";
import useSignIn from "../../Hooks/Use_Sign_In";


export default function SignIn() {

    const navigate = useNavigate();
    const {formData, formError, loading, handleChange, handleSubmit} = useSignIn();

    const [showPassword, setShowPassword] = React.useState(false);
    const toggleShowPassword = (event) => {
        setShowPassword(!showPassword);
    }
    

    return (
        <div className="bg-neutral-200">
            <div className="flex justify-center items-center max-w-[1536px] ml-auto mr-auto">
                <div className="md:w-[30%] max-w-full md:min-w-80 bg-[#282828] rounded-2xl m-16">
                    <h1 className="text-neutral-200 text-3xl text-center sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold mx-4 my-8">
                        Sign In
                    </h1>

                    <form
                        className="flex flex-col mx-12 text-neutral-200 font-montserrat"
                        onSubmit={handleSubmit}
                    >
                        <label className="mt-8 font-medium text-sm sm:text-sm md:text-md lg:text-xl">
                            Your Email <span className="text-red-600">*</span>
                        </label>
                        <input 
                            type="email"
                            placeholder="Example: msdhoni07@gmail.com"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`rounded-sm flex-grow py-2 px-4 my-2 ${formData.email ? "text-[#282828]" : "text-neutral-200"} text-sm`}
                        />
                        <p className="text-red-600 text-md mt-0">
                            {formError.email}
                        </p>

                        <label className="mt-8  font-medium text-sm sm:text-sm md:text-md lg:text-xl">
                            Your Password <span className="text-red-600">*</span>
                        </label>
                        <div className="relative inline-block">
                            <input 
                                type={showPassword ? "text" : "password"}
                                placeholder="Example: jarvis_pepper"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`rounded-sm w-full  py-2 px-4 my-2 ${formData.password ? "text-[#282828]" : "text-neutral-200"} text-sm`}
                            />
                            {
                                formData.password && (
                                    <button 
                                        className="w-4 absolute top-4 right-2 z-40"
                                        onClick={toggleShowPassword}
                                    >
                                        <img 
                                            src={`/Images/${showPassword ? "Hide_Password.png" : "Show_Password.png"}`}
                                            className=""
                                            
                                        />
                                    </button>
                                )
                            }
                        </div>
                        <p className="text-red-600 text-md mt-0 mb-8">
                            {formError.password}
                        </p>
                        

                        <button
                            className="bg-[#B28A5B] text-neutral-200 font-bold mt-2 py-2 px-4 rounded-lg hover:bg-amber-500 transition-colors duration-300"
                            type="submit"
                        >
                            {loading ? "Hold Your Fire 🔥": "Sign In"}
                        </button>

                        <p className="text-neutral-200 font-montserrat font-medium mt-8 mb-4 text-center text-sm sm:text-sm md:text-md lg:text-xl">
                            Sign In Using
                        </p>

                        <SignInSocials />

                        {/* Forgot Password Component (with email as prop) */}
                    </form>

                    <p className="text-neutral-200 font-montserrat font-medium m-8 text-center text-sm sm:text-sm md:text-md lg:text-xl">
                        Not a member yet? <span className="text-[#B28A5B] cursor-pointer" onClick={() => navigate("/sign-up")}>Sign Up</span>
                    </p>
                </div>
            </div>
        </div>
        
    )
}


// flex-1/3
// 282828
// absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none
// -left-6 bottom-[10px]