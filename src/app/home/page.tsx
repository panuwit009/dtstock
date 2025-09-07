"use client";
import Scanbarcode from "./components/scanbarcode";
import Items from "./components/items";
import CameraUi from "./components/cameraUi";
import { useState } from "react";
import FormInsertItem from "./components/forminsertitem";
import type { CameraResult } from "../type";

export default function Home () {
    const [openCamera, setOpenCamera] = useState<boolean>(false);
    const [cameraResult, setCameraResult] = useState<CameraResult>([]);
    const [modal, openModal] = useState<boolean>(false);

const handleClick = () => {
    openModal(p => !p)
}

    if (openCamera) {
        return <CameraUi
                setOpenCamera={setOpenCamera}
                cameraResult={cameraResult}
                setCameraResult={setCameraResult}/>
    } else {   
        return (
            <>
            <Scanbarcode setOpenCamera={setOpenCamera} setCameraResult={setCameraResult}/>
            <Items />
            <button
                onClick={handleClick}
                className="bg-sky-400 p-4 rounded-2xl font-semibold text-white">Button</button>
            {modal &&
                <FormInsertItem onClose={handleClick} />
            }
            </>
        );
    }
}