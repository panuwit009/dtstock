"use client";
import { useState } from "react";
import { StockManage, BarcodeScanner, ItemList, HomeHeader } from "@/components";
import type { CameraResult } from "@/type";

export default function Home () {
    const [openCamera, setOpenCamera] = useState<boolean>(false);
    const [cameraResult, setCameraResult] = useState<CameraResult>([]);

    if (openCamera) {
        return (
            <BarcodeScanner setOpenCamera={setOpenCamera}
            cameraResult={cameraResult}
            setCameraResult={setCameraResult}/>
        );
    } else {   
        return (
            <div
                className="grid grid-rows-20 px-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700
                h-full"
            >
                <HomeHeader />
                {/* <hr className="flex self-center"/> */}
                <div className="mt-6 row-span-17 flex flex-row gap-10">
                    <div className="h-full flex-70 overflow-hidden hover:overflow-y-auto [scrollbar-gutter:stable]">
                            <ItemList />
                    </div>
                    <div className="bg-sky-200/40 flex-30 overflow-y-auto rounded-2xl">
                        <StockManage setOpenCamera={setOpenCamera} />
                    </div>
                </div>
            </div>
        );
    }
}