"use client";
import { setIslogin } from "../type";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

export default function Login({ setIslogin }: setIslogin) {
    const [showPassword, setShowPassword] = useState(false);

    function Open () {
      setShowPassword(prev=>!prev);
    }

  return (
    <div className="bg-gradient-to-br from-sky-400 via-sky-200 to-white min-h-screen w-screen flex justify-center items-center">
      <div className="w-[90%] md:w-[40%] max-w-md max-h-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-3xl font-bold text-sky-600">Dtstock Login</div>
            <div className="w-24 h-24 rounded-full bg-gray-100 bg-cover bg-center shadow-inner"
                    style={{ backgroundImage: "url('/img/logo.webp')" }}>
            </div>
            <div className="text-gray-500 text-sm">Use your Gmail and password to sign in.</div>
            </div>

            <div className="mt-4 space-y-4">
                    <label className="font-medium text-gray-700">Gmail</label>
                        <div className="relative">
                            <FontAwesomeIcon icon={faUser} className="text-gray-700 text-lg absolute left-5 top-1/2 -translate-1/2 rounded-md"/>
                            <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="placeholder-gray-400 placeholder:italic text-black mt-1 w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none transition"
                            />
                        </div>

                    <label className="font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <FontAwesomeIcon icon={faKey} className="text-gray-700 text-lg absolute left-5 top-1/2 -translate-1/2 rounded-md"/>
                            <input
                            type={showPassword ? "text" : "password" }
                            placeholder="12345678910"
                            className="placeholder-gray-400 placeholder:italic text-black mt-1 w-full pl-10 pr-10 py-2 rounded-md border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none transition"
                            />
                            <button className="text-gray-600 text-md absolute right-0 top-1/2 -translate-1/2 rounded-md hover:cursor-pointer hover:text-sky-600" 
                            onClick={Open}> 
                            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash}/>
                             </button>
                       </div>

            <button onClick={() => {alert("เข้าสู่ระบบสำเร็จ"); setIslogin(true);}}
                className="font-semibold w-full bg-sky-500 text-white p-2 rounded-lg shadow-lg hover:bg-sky-600 
                transform transition active:scale-95
                hover:scale-105 hover:cursor-pointer">
                Login
            </button>

            <button 
                className="font-semibold w-full bg-yellow-500 text-white p-2 rounded-lg shadow-lg hover:bg-yellow-600 
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
