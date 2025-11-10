"use client";
import { useState } from "react";
import { LoadingAnimation, FormInsertItem } from "@/components";
import { useShow, useCheckScreen } from "@/utils"
import { useRouter } from "next/navigation";

export default function StockManage ({ 
    switchComponent 
} : { switchComponent: React.Dispatch<React.SetStateAction<"itemlist" | "barcodescanner">>}
) {
    const [error, setError] = useState<string | null>(null);
    const [active, setActive] = useState(false)

    const handleClick = () => {
    setActive(!active); // สลับค่า true <-> false
    openBarcodeScanner(); // เรียกฟังก์ชันเปิดกล้อง
  };

    const { setShow } = useShow();
    const router = useRouter();

    const { isMobile } = useCheckScreen();
    const openBarcodeScanner = () => {
        if (isMobile) {
            router.push("/scanbarcode");
        } else {
            switchComponent(p => p === "itemlist" ? "barcodescanner" : "itemlist");
        }
    }

    return (
    <>
    <div className="bg-sky-200/40 p-6 rounded-2xl">
        <div className="space-y-2">
            <div className="lg:text-2xl 2xl:text-3xl font-bold text-gray-800">จัดการสต็อคสินค้า</div>
            <div className="lg:text-sm 2xl:text-lg text-gray-700">การจัดการสินค้าอย่างมืออาชีพ</div>
        </div>            
        
        <div className="bg-white lg:w-[70%] xl:w-[75%] 2xl:w-[75%] mx-auto my-6 rounded-2xl">
            <LoadingAnimation className="md:h-[150px] md:w-[150px] 2xl:h-[230px] 2xl:w-[230px]" />
        </div>
               {/* <AddOrDecreaseStock 
               stocktype={stocktype}
               setStocktype={setStocktype}
               /> */}
        <div className="flex flex-col items-center gap-2">                  
            {error && <div className="text-red-500 hover:cursor-pointer" onClick={() => setError("")}>{error}</div>}
        </div>
               
        <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-800"></hr>
                <span className="lg:text-sm 2xl:text-lg">หากเครื่องสแกน barcode ใช้งานไม่ได้</span>   
            <hr className="flex-1 border-gray-800"></hr>
        </div>

        <div className="lg:mt-13 2xl:mt-20">  
            <div className="relative lg:h-34 2xl:h-50 w-[90%] bg-white mx-auto rounded-3xl">
                    <div className="group absolute 2xL:-1/3 md:-top-1/3 left-1/2 -translate-x-1/2 md:size-26 2xl:size-34
                    bg-white rounded-full flex items-center justify-center border-6 border-sky-200/40
                    hover:bg-gray-100 hover:border-transparent group:text-white transition duration-300 cursor-pointer"
                        onClick={handleClick}>
                        <div className="flex flex-col items-center gap-2">
                            <svg className="border-b-4 border-blue-200 md:size-10 2xl:size-14 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <span className="lg:text-xs 2xl:text-sm text-black">เปิดกล้อง</span>
                        </div>
                    </div>                    
                    
                    <div className="absolute bottom-0 left-0 p-4">
                            <div className="bg-sky-200 md:p-3 2xl:p-4 rounded-2xl shadow-lg hover:scale-110 transition-transform cursor-pointer" onClick={()=> setShow(<FormInsertItem />)}>
                                <svg className="md:size-4 2xl:size-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
                                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="md:size-5 2xl:size-6">
                    <circle cx="12" cy="12" r="11" fill="none" stroke="#16a34a" strokeWidth="1"/>
                    
                    <path d="M7 12.5 L10.5 16 L17 9" 
                            fill="none" 
                            stroke="#16a34a" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"/>
                </svg>
                <div className="lg:text-xs 2xl:text-lg text-[#16a34a]">ระบบพร้อมใช้งาน</div>
            </div>

        </div>
    </>
    );




}