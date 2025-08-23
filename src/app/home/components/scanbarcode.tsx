"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AddOrDecreaseStock } from "./AddOrDecreaseStock";
import { openCamera } from "./openCamera";
import { useAlert } from "@/app/utils/alertcontext";
import Headscan  from "./Headscan";
import type { CameraResult } from "@/app/type";

export default function Scanbarcode (
    {setOpenCamera, setCameraResult}:
    { setOpenCamera: React.Dispatch<React.SetStateAction<boolean>>;
      setCameraResult: React.Dispatch<React.SetStateAction<CameraResult>>;
    }
) {
    const [error, setError] = useState<string | null>(null);
    const [stocktype, setStocktype] = useState("");

    const { al } = useAlert();
    const router = useRouter();
    function logout (): void {
        al({type: 'success', headerMessage: 'ออกจากระบบสำเร็จ'});
        router.push('/');
    }

    return (
        <>
                <Headscan />

                <div className="bg-white md:rounded-3xl shadow-xl border border-gray-100 max-w-3xl mx-auto">

                        <div className="space-y-6">
                                <AddOrDecreaseStock 
                                stocktype={stocktype}
                                setStocktype={setStocktype}
                                />

                        <div className="flex flex-col items-center gap-2">                  
                            <div
                                className="flex items-center gap-2 text-white shadow-lg hover:cursor-pointer hover:scale-110 transition duration-300 bg-slate-600 p-6 m-2 rounded-xl"
                                onClick={
                                    () => {
                                        if (!stocktype) { setError("กรุณาเลือกประเภทก่อน"); return; }
                                        openCamera({ setCameraResult });
                                        setOpenCamera(true);
                                    }
                            }>
                                    
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h2l2-3h10l2 3h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/> 
                                    <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" />
                                </svg>
                                เปิดกล้อง
                            </div>
                            {error && <div className="text-red-500 hover:cursor-pointer" onClick={() => setError("")}>{error}</div>}
                        </div>

                        <div className="flex items-center justify-center gap-4 px-6">
                            <hr className="flex-1 border-gray-400"></hr>
                            <div>หรือ</div>
                            <hr className="flex-1 border-gray-400"></hr>
                        </div>

                        <div className="flex justify-center">
                            <div className="border-2 border-gray-300 rounded-lg p-6 space-y-2 hover:border-sky-400">
                                    
                                    <div className="flex items-center gap-4">

                                        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
                                            </svg>
                                        </div>

                                        <div className="flex flex-col items-center">
                                            <div className="underline font-bold text-blue-600 hover:cursor-pointer">
                                                เพิ่มข้อมูลด้วยการพิมพ์
                                            </div>

                                            <div className="text-gray-500 text-sm">
                                                กรอกข้อมูลด้วยตนเอง
                                            </div>
                                        </div>

                                    </div>
                            </div>
                        </div>

                    <div className="grid grid-cols-2 px-4 p-4">

                        <div className="hover:cursor-default flex items-center gap-1">

                            <div className="">
                                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="system-ready"> <circle cx="12" cy="12" r="9" strokeWidth="2" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                                </svg>
                            </div>

                            <div className="text-sm text-emerald-500">
                                ระบบพร้อมใช้งาน
                            </div>
                            
                        </div>

                        <div className="flex items-center justify-end gap-1">

                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="logout" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H7a2 2 0 00-2 2v10a2 2 0 002 2h6" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H9" />
                                </svg>
                  
                            <div className="hover:cursor-pointer gap-1 text-red-600 text-sm rounded-lg"
                                onClick={logout}>
                                ออกจากระบบ
                            </div>
                            
                        </div>
                        
                    </div>

                </div>
         </div>
        </>
    );
}