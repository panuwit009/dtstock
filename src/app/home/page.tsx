"use client";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Scanbarcode, Items, CameraUi } from "./components";
import { Sidebar } from "@/components";
import type { CameraResult } from "@/type";

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
            <main>     
                <CameraUi
                setOpenCamera={setOpenCamera}
                cameraResult={cameraResult}
                setCameraResult={setCameraResult}/>
            </main>
        );
    } else {   
        return (
            <div className="w-screen h-screen overflow-x-hidden">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main 
                    className={`p-4 ml-3 ${sidebarOpen && "md:ml-64"}`}
                >
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        <Scanbarcode setOpenCamera={setOpenCamera} />
                        <Items />
                    </div>
                </main>
            </div>
        );
    }
}