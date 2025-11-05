"use client";
import { useState } from "react";
import { LoadingAnimation } from "@/components";
import { useShow } from "@/utils"
import FormInsertItem from "././forminsertitem";

export default function Scanbarcode (
    { setOpenCamera }:
    { setOpenCamera: React.Dispatch<React.SetStateAction<boolean>>; }
) {
    const [error, setError] = useState<string | null>(null);

    const { setShow } = useShow();

    return (
    <>
    <div className="p-6 w-full h-full">
        <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-800">จัดการสต็อคสินค้า</div>
            <div className="text-sm text-gray-700">การจัดการสินค้าอย่างมืออาชีพ</div>
        </div>            
        
        <div className="bg-white flex justify-center items-center max-w-2xs mx-auto my-6 rounded-2xl">
            <LoadingAnimation />
        </div>
               {/* <AddOrDecreaseStock 
               stocktype={stocktype}
               setStocktype={setStocktype}
               /> */}
        <div className="flex flex-col items-center gap-2">                  
            {error && <div className="text-red-500 hover:cursor-pointer" onClick={() => setError("")}>{error}</div>}
        </div>
               
        <div className="flex items-center justify-center gap-2">
            <hr className="flex-1 border-gray-800"></hr>
                <span className="text-lg">หากเครื่องสแกน barcode ใช้งานไม่ได้</span>   
            <hr className="flex-1 border-gray-800"></hr>
        </div>

        <div className="mt-20">  
            <div className="relative h-50 w-[90%] bg-white mx-auto rounded-3xl flex items-end">
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-34 h-34 
                    bg-white rounded-full flex items-center justify-center border-6 border-sky-200/40"
                        onClick={() => { setOpenCamera(true); }}>
                        <div className="flex flex-col items-center gap-2">
                            <svg className="border-b-4 border-blue-200 w-14 h-14 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                                <span className="text-sm text-gray-700">เปิดกล้อง</span>
                        </div>
                    </div>                    
                    
                    <div className="w-full p-4">
                        <div className="flex items-center justify-between">
                            <div className="bg-sky-200 p-4 rounded-2xl shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
                                </svg>
                            </div>

                        </div>
                    </div>
                    
                    {/* <div
                        className="flex items-center gap-2 text-white shadow-lg hover:cursor-pointer hover:scale-110 transition duration-300 bg-slate-600 p-6 m-2 rounded-xl"
                        onClick={() => { setOpenCamera(true); }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h2l2-3h10l2 3h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/> 
                                <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            เปิดกล้อง
                    </div> */}
            </div>
        </div>  
            
            <div className="mt-6 flex flex-row justify-end items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
                    <circle cx="12" cy="12" r="11" fill="none" stroke="#16a34a" strokeWidth="1"/>
                    
                    <path d="M7 12.5 L10.5 16 L17 9" 
                            fill="none" 
                            stroke="#16a34a" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"/>
                    </svg>
                <div className="text-[#16a34a]">ระบบพร้อมใช้งาน</div>
            </div>

        </div>
    </>
    );




}