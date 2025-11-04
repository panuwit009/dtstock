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
            <div className="flex w-dvw h-dvh">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} Page="Home"/>
                <main 
                    className={`flex-1 p-4 ml-3 ${sidebarOpen && "md:ml-64"}`}
                >
                    <div
                        className="grid grid-rows-20 gap-y-6 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700
                        h-full">

                            <header className="row-span-3">
                                <span className="font-bold text-3xl">Dashboard</span>
                            </header>

                            {/* <hr className="flex self-center"/> */}

                            <div className="row-span-17 flex flex-row gap-15">

                                <div className="h-full flex-70 overflow-y-auto">
                                     <Items />
                                </div>

                                <div className="flex-30 overflow-y-auto">
                                    <Scanbarcode setOpenCamera={setOpenCamera} />
                                </div>

                            </div>
             
                    </div>
                </main>
            </div>
        );
    }
}