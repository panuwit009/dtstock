"use client";
import Scanbarcode from "./components/scanbarcode";
import Items from "./components/items";
import CameraUi from "./components/cameraUi";
import { useState } from "react";

export default function Home () {
    const [openCamera, setOpenCamera] = useState<boolean>(false);

    if (openCamera) {
        return <CameraUi setOpenCamera={setOpenCamera}/>
    } else {   
        return (
            <>
            <Scanbarcode setOpenCamera={setOpenCamera}/>
            <Items />
            </>
        );
    }
}