"use client";
import { useEffect, useState } from "react";

import HeadLogin from "./headlogin";
import Bodylogin from "./formlogin";
import AlertPTB from "../utils/alert";
// import LottieLoader from "../utils/loading";

export default function Login () {
    const [isLoading, setIsLoading] = useState(false);
    const [popup, setPopup] = useState(false);

    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setIsLoading(false);
    //   }, 5000);
    //   return () => clearTimeout(timer);
    // }, []);

    //if (isLoading) return <LottieLoader />;

    function clickLoginButton (): void {
      setPopup(true);
      // setTimeout(() => {
      //   setIslogin(true);
      // }, 2000);
    }

  return (
    <>
        {popup && <AlertPTB type="error" />}
        
        <div className="min-h-screen w-screen flex justify-center items-center">
          <div className="border-white/30 border w-[95%] md:w-[40%] max-w-md max-h-md bg-white/80 rounded-2xl shadow-2xl p-8">

            <HeadLogin />
              <Bodylogin />
           
            <div className="mt-6 space-y-4">

              <button onClick={clickLoginButton}
                  className="text-lg font-semibold w-full bg-sky-500 text-white p-2 rounded-lg shadow-lg hover:bg-sky-600 
                  transform transition active:scale-95
                  hover:scale-105 hover:cursor-pointer">
                  Login
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

    
      </>
  );
}
