"use client";
import { useState, useEffect } from "react"
import { openCamera, closeCamera } from "./camera/openCamera";
import type { CameraResult } from "@/app/type";
import { useShow } from "@/app/utils/showcontext";
import { overlayBlur } from "@/app/utils/overlay";
import { Manual } from "./camera/manual";
import { Manage } from "./camera/manage";
import { qrCode, leftArrow } from "./camera/svg";
// import { isMobile } from "react-device-detect";

export const Afterscan = (
    {
        data,
        setShow,
        waitScanbarcode,
        setCameraResult
    }:
    { 
        data: string;
        setShow: React.Dispatch<React.SetStateAction<React.JSX.Element | null>>;
        waitScanbarcode: () => Promise<void>;
        setCameraResult: React.Dispatch<React.SetStateAction<CameraResult>>;
    }
) => {
    return (
    <>
    {overlayBlur}
    <div className="fixed inset-0 flex justify-center items-center border border-white/40 z-50">
        <div className="bg-white p-6 rounded-2xl shadow-xl max-h-[90%] w-87 overflow-y-auto no-scrollbar">
            <img 
                className="h-50 mx-auto rounded-2xl mb-4"
                src="https://webtntlprd.blob.core.windows.net/content/1671768873047-2555.webp"
            />
            <h2 className="text-lg font-semibold mb-2">น้ำทิพย์ น้ำดื่ม 1500 มล.</h2>
            <p>น้ำทิพย์ น้ำดื่มคุณภาพที่ได้รับการรับรองในระดับสากล ให้คุณมั่นใจในคุณภาพจากทุกขวดที่ดื่ม โดยบรรจุมาในขวด Eco ที่คิดมาเพื่อโลก</p>
            <p className="text-gray-400 break-all">Barcode: {data}</p>
            <p className="mt-4 text-center">เพิ่มสินค้านี้ลงในรายการ ?</p>

            <div className=" flex justify-between">
                <button className="w-35 bg-red-500 text-white px-4 py-2 rounded-lg hover:cursor-pointer"
                    onClick={() => { setShow(null); waitScanbarcode(); }}
                >
                    ยกเลิก
                </button>
                <button className="w-35 bg-blue-500 text-white px-4 py-2 rounded-lg hover:cursor-pointer"
                    onClick={() => { setShow(null); waitScanbarcode(); setCameraResult( p => [ ...p, { barcode: data ?? "" }]);}}
                >
                    ตกลง
                </button>
            </div>
        </div>
    </div>
    </>
    );
};

export default function CameraUi (
    { setOpenCamera, cameraResult, setCameraResult }:
    { setOpenCamera: React.Dispatch<React.SetStateAction<boolean>>;
      cameraResult: CameraResult;
      setCameraResult: React.Dispatch<React.SetStateAction<CameraResult>>;
    }
) {
    const [selected, setSelected] = useState<"scanning" | "manual" | "manage">("scanning");
    const { setShow } = useShow();

    useEffect( () => {
        const waitScanbarcode = async () => {
            const result = await openCamera();
            if ( result.barcode ) {
                closeCamera();
                setShow(
                    <Afterscan data={ result.barcode }
                    setShow={setShow} waitScanbarcode={waitScanbarcode}
                    setCameraResult={setCameraResult}/>
                );
            }
        }
        // waitScanbarcode();          
    }, []);

    const stopCamera = (): void => {
        closeCamera();
        setOpenCamera(false);
    }
    // if (isMobile) 
    return (
        <div className="flex justify-center items-center w-full h-[100dvh] bg-gray-200">          
            <video id="video" className="h-[100dvh] object-cover" />
            <Manual selected={selected}/>
            { selected === "manage" &&
            <Manage cameraResult={cameraResult}/>}
            <div className="z-9 absolute top-0 left-0 w-full h-[20vh] bg-[#4D4846]/89 flex flex-col justify-center items-center gap-2">
                <div className="px-4 py-2 bg-white rounded-lg font-medium font-semibold w-[70%] text-center">
                    Barcode Scanner
                </div>

                { selected !== "manage" &&
                <div className="relative w-[70%] bg-gray-300 rounded-lg flex">
                    <div
                        className="absolute top-0 left-0 h-full w-1/2 bg-blue-500 rounded-lg transition-all duration-300"
                        style={{
                        transform: selected === "scanning" 
                                    ? "translateX(0%)" 
                                    : selected === "manual" 
                                    ? "translateX(100%)" 
                                    : undefined, // default fallback
                        }}
                    />
                    <label
                        className={`flex-1 py-2 text-center ${selected === "scanning" && "text-white"} hover:text-white cursor-pointer z-12 font-medium`}
                        onClick={() => setSelected("scanning")}
                    >
                        <input
                        type="radio"
                        name="color"
                        value="gray"
                        className="hidden"
                        checked={selected === "scanning"}
                        onChange={() => setSelected("scanning")}
                        />
                        กำลังสแกน
                    </label>
                    <label
                        className={`flex-1 py-2 text-center ${selected === "manual" && "text-white"} hover:text-white cursor-pointer z-12 font-medium`}
                        onClick={() => setSelected("manual")}
                    >
                        <input
                        type="radio"
                        name="color"
                        value="manual"
                        className="hidden"
                        checked={selected === "manual"}
                        onChange={() => setSelected("manual")}
                        />
                        คู่มือ
                    </label>
                </div>
                }
            </div>

            <div className="z-2 absolute bottom-0 left-0 w-full h-[13vh] bg-[#4D4846]/89 flex justify-between items-center px-4">
                { selected === "manage" ?
                <button
                    className="w-12 h-12 rounded-full bg-white text-[#73ACF6] flex items-center justify-center text-lg font-bold hover:cursor-pointer"
                    onClick={() => setSelected("scanning")}
                >
                    {qrCode}
                </button> :
                <>
                <button
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:cursor-pointer"
                    onClick={stopCamera}
                >
                    {leftArrow}
                </button>
                
                <button 
                    className="relative bg-blue-500 text-white px-4 py-2 rounded-lg font-medium
                    hover:cursor-pointer hover:bg-blue-600"
                    onClick={() => setSelected("manage")}
                >
                    ทำรายการ
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        { cameraResult.length }
                    </span>
                </button>
                </>
                }
            </div>
            <div className="absolute top-1/2 left-1/2 w-[92%] h-[2px] bg-red-500 -translate-x-1/2" />
            
        </div>
    );
}