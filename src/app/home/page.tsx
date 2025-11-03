"use client";
import { useState } from "react";
import { Scanbarcode, Items, Sidebar, CameraUi } from "./components";
import type { CameraResult } from "../type";

export default function Home () {
    const [openCamera, setOpenCamera] = useState<boolean>(false);
    const [cameraResult, setCameraResult] = useState<CameraResult>([]);
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

    if (openCamera) {
        return (
            <CameraUi
            setOpenCamera={setOpenCamera}
            cameraResult={cameraResult}
            setCameraResult={setCameraResult}/>
        );
    } else {   
        return (
            <>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <div className={`p-4 ${sidebarOpen ? "ml-64" : "ml-6"}`}>
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <Scanbarcode setOpenCamera={setOpenCamera} />
                    <Items />
                </div>
            </div>
            </>
        );
    }
}