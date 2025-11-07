"use client";
import { useState, useEffect } from "react";

export default function Exp () {
        const [exp, setExp] = useState(false);
    
        const handleChanage = (e : React.ChangeEvent<HTMLInputElement>) => {
            setExp(e.target.checked)
        }
        
        useEffect(() => {console.log(exp)})
    return (
                    <div className="lg:col-span-4">
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 space-y-2">
                            <div className="flex items-center gap-3">
                                <input 
                                    type="checkbox" 
                                    name=""
                                    checked={exp} 
                                    onChange={handleChanage}
                                    id="exp" 
                                    className="sr-only"/>
                                <label htmlFor="exp">
                                    <div className={`h-8 w-15 rounded-full relative p-1 transition-all duration-300 inline-block
                                                    ${exp
                                                        ? 'bg-amber-400'
                                                        : 'bg-gray-200'
                                                    }
                                                    `}>
                                        <div className={`h-6 w-6 bg-white rounded-full absolute top-1 transition-all duration-300
                                                    ${exp
                                                        ? 'translate-x-6.5'
                                                        : 'translate-x-0'
                                                        
                                                    }
                                                    `}></div>
                                    </div>
                                </label>
                                <span className="text-lg font-semibold text-amber-800">สินค้ามีวันหมดอายุ</span>
                            </div>

                        
                        {exp &&
                            <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
                                <label className="text-amber-700 font-medium">วันหมดอายุ</label>
                                <input className="bg-gray-100/30 border-2 border-amber-200 rounded-2xl w-full p-4 
                                            placeholder:font-semibold placeholder:text-gray-400
                                            focus:border-black focus:ring-0 outline-none
                                            transition-all duration-300" 
                                            type="date"/>
                            </div>
                            }
                        </div>
                    </div>
    )
}