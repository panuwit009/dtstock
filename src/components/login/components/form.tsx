"use client";
import { useState } from "react";
import { faKey, faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Form ({ setIslogin }: { setIslogin: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    function Open () {
      setShowPassword(prev=>!prev);
    }
    
    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true); setIslogin(true);
    }
    
    return (
        <form className="mt-6 space-y-4" onSubmit={submitForm}>
            <div className="transition duration-300 focus-within:scale-105">
                <label className="font-medium text-gray-700">Email</label>
                <div className="relative">
                <FontAwesomeIcon icon={faUser} className="text-gray-700 text-lg absolute left-3 top-1/2 -translate-y-1/2 rounded-md"/>
                <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="placeholder-gray-400 placeholder:italic text-black mt-1 w-full pl-10 pr-4 py-2 rounded-md border border-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none"
                />
                </div>
            </div>
            <div className="transition duration-300 focus-within:scale-105">
                <label className="font-medium text-gray-700">Password</label>
                <div className="relative">
                <FontAwesomeIcon icon={faKey} className="text-gray-700 text-lg absolute left-3 top-1/2 -translate-y-1/2 rounded-md"/>
                <input
                    type={showPassword ? "text" : "password" }
                    placeholder="12345678910"
                    className="placeholder-gray-400 placeholder:italic text-black mt-1 w-full pl-10 pr-10 py-2 rounded-md border border-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none"
                />
                <button className="text-gray-600 text-md absolute right-3 top-1/2 -translate-y-1/2 rounded-md hover:cursor-pointer hover:text-sky-600" 
                    onClick={Open}
                >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash}/>
                </button>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <button 
                    type="submit"
                    className={`flex justify-center items-center h-12 text-lg font-semibold
                        w-full text-white p-2 rounded-lg shadow-lg 
                        transform transition active:scale-95
                        ${isLoading
                            ? 'bg-sky-600 cursor-not-allowed'
                            : 'bg-sky-400 cursor-pointer'
                        }`}
                >
                    {isLoading 
                        ? <div className="w-6 h-6 border-[5px] inline-block border-white border-b-transparent rounded-full box-border animate-spin" />
                        : 'Login'
                    }
                </button>
                <button 
                    className="text-lg font-semibold w-full bg-yellow-500 text-white
                    p-2 rounded-lg shadow-lg hover:bg-yellow-600 
                    transform transition active:scale-95
                    hover:scale-105 hover:cursor-pointer"
                >
                    Register
                </button>
                <div 
                    className="text-sky-600 text-center text-sm 
                    hover:underline hover:cursor-pointer"
                >
                    Forget your password ?
                </div>
            </div>
        </form>
    );
}