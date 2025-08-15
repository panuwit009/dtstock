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
        <>
                <div className="text-center p-4">

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
                            <div
                                className="hover:cursor-pointer hover:scale-110 transition duration-300 text-black bg-stone-400 inline-flex items-center gap-2 p-4 m-2 rounded-lg font-semibold"
                                onClick={() => openCamera({ setError })}
                                >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 7h2l2-3h10l2 3h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"
                                    />
                                    <circle
                                    cx="12"
                                    cy="13"
                                    r="4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    />
                                </svg>
                                ปุ่มเปิดกล้อง
                            </div>
                            {error && <div className="text-red-500 hover:cursor-pointer" onClick={() => setError("")}>{error}</div>}
                        </div>

                        <div className="text-center">
                            <div className="bg-white border-2 border-gray-200 inline-block p-6 space-y-2 hover:border-sky-400">
                                    
                                    <div className="flex items-center gap-4">

                                        <div>
                                            <svg
                                                className="w-5 h-5 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"
                                                />
                                            </svg>
                                        </div>

                                        <div>
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

                    </div>

                    <div className="flex justify-end p-4">

                                        <p className="hover:cursor-pointer"
                            onClick={() => { alert("ออกจากระบบสำเร็จ"); router.push('/'); }}>Logout</p>
                    </div>


                </div>
        </>
    );
}