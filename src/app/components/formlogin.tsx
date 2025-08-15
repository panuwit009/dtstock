import { useState } from 'react';
import { faKey, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Bodylogin () {
    const [showPassword, setShowPassword] = useState(false);

        function Open () {
      setShowPassword(prev=>!prev);
    }

    return(
                    <div className="mt-6 space-y-4">
                        <div className="transition duration-300 focus-within:scale-105">
                            <label className="font-medium text-gray-700">Gmail</label>
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
                            onClick={Open}> 
                            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash}/>
                             </button>
                          </div>
                       </div>
                    </div>
    )
}