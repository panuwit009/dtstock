"use client";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useAlert } from './alertcontext';

export default function AlertPTB () {
    const { show, setShow } = useAlert();

    if (show) {
        return (

            <div className="fadeInUpOnce fixed bg-black/40 inset-0 flex justify-center items-center z-10" >

                <div className="bg-white rounded-2xl w-sm relative flex flex-col items-center space-y-7 px-10 py-6 drop-shadow-lg/20 
                                border-t-6 border-emerald-400">

                    <div className='text-black absolute top-2 right-3 rounded-full hover:cursor-pointer'
                    onClick={()=>setShow(null)}>
                        ✖
                     </div>

                    <div className={`text-white text-3xl bg-gradient-to-br from-emerald-400 to-green-400 px-6 py-4 rounded-full animate-bounce`}>
                        ✔
                    </div>

                    <div className='text-center space-y-3 hover:cursor-default'>
                        <div className="text-black text-2xl font-semibold">
                            Login Successful
                        </div>

                        <div className="text-gray-500 text-sm">
                            Welcome ! <br /> {show?.type && `ทดสอบ alert type: ${show?.type}`}
                        </div>
                    </div>

                    <div className="w-full text-center bg-gradient-to-br from-emerald-400 to-green-500 text-white rounded-2xl shadow-lg p-4 font-semibold 
                                    translate duration-300 hover:cursor-pointer hover:scale-110 active:scale-95"
                    onClick={()=>setShow(null)}>
                       Confirm
                    </div>

                </div>
            </div>
        );
    }
    
}