"use client";
import { useEffect } from "react";
import { openCamera, closeCamera, } from "./function/openCamera";
import "./css/animation.css";

export default function BarcodeScanner () {
    useEffect( () => {
        const waitScanbarcode = async () => {
            const result = await openCamera();
            if ( result.barcode ) {
                closeCamera();
                alert(result.barcode);
            }
        }
        waitScanbarcode();          
    }, []);

    return (
        <div className="relative flex justify-center items-center w-full h-full">  
            <video id="video" className="h-full w-full object-cover" />
            <div className="absolute top-1/2 left-1/2 w-[92%] h-[2px] bg-red-500 -translate-x-1/2" />
        </div>
    );
}