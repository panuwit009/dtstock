import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import "./alert.css";

export default function AlertPTB () {
    const [show, setShow] = useState(true);
    // const [type, setType] = useState("");

    // switch (type) {
    //     case "success":
    //         const color = "#b7f473";
    //         break;
    //     case "error":
    //         const color = "";
    //         break;
    //     default :
    //         const color = "";
    //     break;

    // }

    if (show) {
        return (

            <div className="fixed bg-black/40 inset-0 flex justify-center items-center z-10" >

                <div className="bg-white rounded-2xl w-sm relative flex flex-col items-center space-y-7 px-10 py-6 drop-shadow-lg/20 border-t-6 border-[#b7f473]">

                    <div className='text-black absolute top-2 right-3 rounded-full hover:cursor-pointer'
                    onClick={()=>setShow(false)}>
                        ✖
                     </div>

                    <div className={`text-white text-3xl bg-[#b7f473] px-6 py-4 rounded-full`}>
                        ✔
                    </div>

                    <div className="text-black text-xl font-semibold" id='test'>
                        เข้าสู่ระบบสำเร็จ
                    </div>

                    <div className="w-full text-center text-xl bg-[#b7f473] text-white rounded-full p-4 font-semibold hover:cursor-pointer"
                    onClick={()=>setShow(false)}>
                       ยืนยัน
                    </div>

                </div>
            </div>
        );
    }
    
}