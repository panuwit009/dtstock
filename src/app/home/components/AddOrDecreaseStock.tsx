"use client";
import { useState } from "react";

export function AddOrDecreaseStock() {
    const [stocktype, setStocktype] = useState("");
    function selectStocktype(st: string) {
        if(stocktype === st) {
            setStocktype("");
        } else {
            setStocktype(st)
        }
    }
    return (<>
        <div className="flex items-center justify-center pt-6 px-4 gap-10 md:gap-14">


                                <div className="relative">
                                    <button
                                        onClick={() => selectStocktype("add")}
                                        className={`${stocktype === "add" ? "text-white bg-emerald-400 scale-115" : "bg-white"} 
                                        hover:scale-110 shadow-lg text-emerald-400 px-6 py-5 rounded-2xl font-medium transition duration-300 border-2 border-emerald-400 hover:cursor-pointer flex items-center gap-2`}>
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                            </svg>
                                        เพิ่มสล็อค
                                    </button>
                                </div>

                                <button
                                    onClick={() => selectStocktype("dec")}
                                    className={`${stocktype === "dec" ? "text-white bg-rose-600 scale-115" : "bg-white"} 
                                        hover:scale-110 shadow-lg text-rose-400 px-6 py-5 rounded-2xl font-medium transition duration-300 border-2 border-rose-600 hover:cursor-pointer flex items-center gap-2`}
                                    >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                    </svg>
                                    ตัดสล็อค
                                </button>

        </div>
    </>);
}