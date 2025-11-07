"use client";
import { useState } from "react";
import { StockManage, BarcodeScanner, ItemList } from "@/components";
import type { CameraResult } from "@/type";

export default function Home () {
    const [openCamera, setOpenCamera] = useState<boolean>(false);
    const [cameraResult, setCameraResult] = useState<CameraResult>([]);

    if (openCamera) {
        return (
            <main>     
                <BarcodeScanner
                setOpenCamera={setOpenCamera}
                cameraResult={cameraResult}
                setCameraResult={setCameraResult}/>
            </main>
        );
    } else {   
        return (
            <div className="flex w-dvw h-dvh">
                <main 
                    className={`flex-1 p-4 ml-3`}
                >
                    <div
                        className="grid grid-rows-20 px-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700
                        h-full">
                            <header className="row-span-3 px-4 flex items-center justify-between border-b border-b-gray-400">
                                
                                    <div className="">
                                        <span className="font-bold text-sm xl:text-2xl 2xl:text-3xl">Test</span>
                                        <div className="text-lg text-gray-700 font-thin">การจัดการสินค้าอย่างมืออาชีพ</div>
                                    </div>

                                    <div className="">
                                        <div className="grid grid-cols-3 gap-6">
                                            <div className="flex items-center justify-center gap-4">
                                                <div className="rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
                                                        <rect width="100" height="100" fill="#f5f5f5" rx="15"/>
                                                        <path d="M 30 35 L 70 35 L 50 60 Z" fill="#e74c3c"/>
                                                    </svg>
                                                </div>

                                                <div className="flex flex-col">
                                                    <span className="text-sm">รายการสินค้าที่ถูกใช้วันนี้</span>
                                                    <span className="font-bold text-xl">79 ชิ้น </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center gap-4">
                                                <div className="rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
                                                        <rect width="100" height="100" fill="#f5f5f5" rx="15"/>
                                                        <path d="M 50 35 L 70 60 L 30 60 Z" fill="#27ae60"/>
                                                    </svg>      
                                                </div>

                                                <div className="flex flex-col">
                                                    <span className="text-sm">รายการสินค้าที่เพิ่มวันนี้</span>
                                                    <span className="font-bold text-xl">79 ชิ้น </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center">
                                                <div className="grid grid-cols-2 gap-9">
                                                    <span className="relative w-16 h-16 rounded-full flex items-center justify-center bg-[#685762] hover:scale-110 hover:cursor-pointer hover:bg-blue-200 transition duration-150">
                                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12 2C11.4477 2 11 2.44772 11 3V3.5C8.51472 4.08996 6.5 6.24021 6.5 8.92308V12.5385C6.5 13.3946 6.21563 14.2154 5.7019 14.8462L4.61803 16.1538C3.87071 17.0769 4.52364 18.5 5.69231 18.5H18.3077C19.4764 18.5 20.1293 17.0769 19.382 16.1538L18.2981 14.8462C17.7844 14.2154 17.5 13.3946 17.5 12.5385V8.92308C17.5 6.24021 15.4853 4.08996 13 3.5V3C13 2.44772 12.5523 2 12 2Z" 
                                                                fill="#ffffffff"/>
                                                                <path d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20H10Z" 
                                                                fill="#ffffffff"/>
                                                            </svg>
                                                            <span className="absolute top-0 right-0 w-4 h-4 rounded-lg bg-green-400 animate-ping" ></span>
                                                            <span className="absolute top-0 right-0 w-4 h-4 rounded-lg bg-green-400"></span>                                                        
                                                    </span>


                                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center hover:scale-110 hover:cursor-pointer hover:bg-blue-200 transition duration-150">
                                                        <div className="w-full h-full bg-cover rounded-full bg-[url('/img/1.jpg')]">
                                                        </div>
                                                    </div>

                                                </div>
        
                                            </div>
                                        </div>
                                    </div>


                            </header>
                            {/* <hr className="flex self-center"/> */}

                            <div className="mt-6    row-span-17 flex flex-row gap-10">

                                <div className="h-full flex-70 overflow-hidden hover:overflow-y-auto [scrollbar-gutter:stable]">
                                     <ItemList />
                                </div>

                                <div className="bg-sky-200/40 flex-30 overflow-y-auto rounded-2xl">
                                    <StockManage setOpenCamera={setOpenCamera} />
                                </div>

                            </div>
             
                    </div>
                </main>
            </div>
        );
    }
}