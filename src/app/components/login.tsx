"use client";
import HeadLogin from "./headlogin";
import Bodylogin from "./formlogin";
import type { setIslogin } from "../type";
import { useState } from "react";
import './loading.css';

export default function Login ({ setIslogin }: setIslogin) {
const [isLoading, setIsLoading] = useState(false);

const clickLoginButton = () => {
  setIsLoading(true); setIslogin(true);
  // setTimeout( ()=> setIslogin(true), 1000);
};

return (
<div className="min-h-screen w-screen flex justify-center items-center">
  <div className="border-white/30 border w-[95%] md:w-[40%] max-w-md max-h-md bg-white/80 rounded-2xl shadow-2xl p-8">
    <HeadLogin />
    <Bodylogin />
    <div className="mt-6 space-y-4">
      <button 
        onClick={clickLoginButton}
        className={`flex justify-center items-center h-12 text-lg font-semibold w-full text-white p-2 rounded-lg shadow-lg
          transform transition active:scale-95
          ${isLoading
            ? 'bg-sky-600 cursor-not-allowed'
            : 'bg-sky-400 cursor-pointer'
          }
        `}>
          {isLoading 
          ? 
          <div className="w-6 h-6 border-[5px] inline-block border-white border-b-transparent rounded-full box-border animate-spin"></div>
          : 'Login'
          }
      </button>
      
      <button 
      className="text-lg font-semibold w-full bg-yellow-500 text-white p-2 rounded-lg shadow-lg hover:bg-yellow-600 
      transform transition active:scale-95
      hover:scale-105 hover:cursor-pointer">
        Register
      </button>
      
      <div 
      className="text-sky-600 text-center text-sm 
      hover:underline hover:cursor-pointer">
        Forget your password ?
      </div>
    </div>
  </div>
</div>
);
}
