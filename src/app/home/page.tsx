"use client";
import Scanbarcode from "./components/scanbarcode";
import Items from "./components/items";
import CameraUi from "./components/cameraUi";
import { useState } from "react";
import FormInsertItem from "./components/forminsertitem";
import type { CameraResult } from "../type";

export default function Home () {
    const [openCamera, setOpenCamera] = useState<boolean>(false);
    const [cameraResult, setCameraResult] = useState<CameraResult>(
        [
            {
                id: 1
            },
            {
                id: 2
            }
        ]
    );

    if (openCamera) {
        return <CameraUi
                setOpenCamera={setOpenCamera}
                cameraResult={cameraResult}/>
    } else {   
        return (
            <>
            <Scanbarcode setOpenCamera={setOpenCamera}/>
            <Items />
            <FormInsertItem />
            </>
        );
    }
}