"use client";
import { useState, useEffect } from "react"
import { openCamera, closeCamera } from "./openCamera";
import type { CameraResult } from "@/app/type";
import { useShow } from "@/app/utils/showcontext";
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
    <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h2 className="text-lg font-semibold mb-4">Title</h2>
            <p>Barcode: {data}</p>

            <button className="mt-4 bg-sky-500 text-white px-4 py-2 rounded-lg"
                onClick={() => { setShow(null); waitScanbarcode(); setCameraResult( p => [ ...p, { barcode: data ?? "" }]);}}
            >
                asd
            </button>
            <button className="mt-4 bg-sky-500 text-white px-4 py-2 rounded-lg"
                onClick={() => { setShow(null); waitScanbarcode(); }}
            >
                Close
            </button>
        </div>
    </div>
    );
};

export default function CameraUi (
    { setOpenCamera, cameraResult, setCameraResult }:
    { setOpenCamera: React.Dispatch<React.SetStateAction<boolean>>;
      cameraResult: CameraResult;
      setCameraResult: React.Dispatch<React.SetStateAction<CameraResult>>;
    }
) {
    const [selected, setSelected] = useState<"gray" | "blue">("gray");
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
        waitScanbarcode();          
    }, []);

    const stopCamera = (): void => {
        closeCamera();
        setOpenCamera(false);
    }
    // if (isMobile) 
    return (
        <div className="inline-block relative w-full h-[100dvh] bg-white">            
            <video id="video" className="h-[100dvh] object-cover" />
            <div className="absolute top-0 left-0 w-full h-[20vh] bg-black/30 flex flex-col justify-center items-center gap-2">
                <div className="px-4 py-2 bg-white rounded-lg font-medium font-semibold w-[70%] text-center">
                    Barcode Scanner
                </div>
                <div className="relative w-[70%] bg-gray-300 rounded-lg flex">
                    <div
                        className="absolute top-0 left-0 h-full w-1/2 bg-blue-500 rounded-lg transition-all duration-300"
                        style={{
                        transform: selected === "gray" ? "translateX(0%)" : "translateX(100%)",
                        }}
                    />
                    <label
                        className="flex-1 py-2 text-center cursor-pointer z-10 font-medium"
                        onClick={() => setSelected("gray")}
                    >
                        <input
                        type="radio"
                        name="color"
                        value="gray"
                        className="hidden"
                        checked={selected === "gray"}
                        onChange={() => setSelected("gray")}
                        />
                        กำลังสแกน
                    </label>
                    <label
                        className="flex-1 py-2 text-center cursor-pointer z-10 font-medium"
                        onClick={() => setSelected("blue")}
                    >
                        <input
                        type="radio"
                        name="color"
                        value="blue"
                        className="hidden"
                        checked={selected === "blue"}
                        onChange={() => setSelected("blue")}
                        />
                        คู่มือ
                    </label>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[13vh] bg-black/30 flex justify-between items-center px-4">
                <button
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-white
                    text-lg font-bold hover:cursor-pointer"
                    onClick={stopCamera}
                >
                    ←
                </button>

                <button className="relative bg-blue-500 text-white px-4 py-2 rounded-lg font-medium">
                    ทำรายการ
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        { cameraResult.length }
                    </span>
                </button>
            </div>
            <div className="absolute top-1/2 left-1/2 w-[92%] h-[2px] bg-red-500 -translate-x-1/2" />
        </div>
    );
}