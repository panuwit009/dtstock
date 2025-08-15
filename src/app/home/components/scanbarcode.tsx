"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AddOrDecreaseStock } from "./AddOrDecreaseStock";
import { openCamera } from "./openCamera";

export default function Scanbarcode () {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

        const [stocktype, setStocktype] = useState("");
    function selectStocktype(st: string) {
        if(stocktype === st) {
            setStocktype("");
        } else {
            setStocktype(st)
        }
    }

    return (
        <div className="p-4">
            
                <div className="text-center m-4">

                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 7l9-4 9 4-9 4-9-4z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 7v10l9 4 9-4V7"
                        />
                        </svg>
                    </div>
   
                    <h1 className="text-3xl font-bold text-gray-800">
                        ระบบการจัดสินค้าสต็อค 
                    </h1>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 max-w-2xl mx-auto">

                        <div className="space-y-8">
                                <AddOrDecreaseStock />

                        <div className="text-center">
                            <p className="hover:cursor-pointer bg-stone-400 inline-block p-4 m-2 rounded-lg font-semibold"
                            onClick={() => openCamera({setError})}>ปุ่มเปิดกล้อง</p>
                            {error && <p className="text-red-500 hover:cursor-pointer" onClick={() => setError("")}>{error}</p>}
                        </div>

                        <div className="text-center">
                            <div className="bg-white border-2 border-gray-200 inline-block p-6 space-y-2">

                                    <div className="underline text-blue-600 hover:cursor-pointer">
                                        คลิกที่นี่
                                    </div>
                                    
                                    <div>
                                        เพื่อเพิ่มข้อมูลด้วยการพิมพ์
                                    </div>

                            </div>
                        </div>

                    </div>

                    <div className="flex justify-end p-4">

                                        <p className="hover:cursor-pointer"
                            onClick={() => { alert("ออกจากระบบสำเร็จ"); router.push('/'); }}>Logout</p>
                    </div>


                </div>
        </div>
    );
}