"use client";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Scanbarcode, Items, Sidebar, CameraUi } from "./components";
import type { CameraResult } from "../type";

export default function Home () {
    const [openCamera, setOpenCamera] = useState<boolean>(false);
    const [cameraResult, setCameraResult] = useState<CameraResult>([]);
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
    // const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    useEffect(() => {
        if (isTablet) {
            setSidebarOpen(false);
        } else {
            setSidebarOpen(true);
        }
    }, [isTablet]);

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
            <div className={`p-4 ${sidebarOpen ? "ml-64" : "ml-3"}`}>
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <Scanbarcode setOpenCamera={setOpenCamera} />
                    <Items />
                </div>
            </div>
            </>
        );
    }
}