"use client";
import { useState } from "react";
import { ItemList, HomeHeader, BarcodeScanner, ResponsiveSwitch } from "@/components";

export default function Home () {
    return (
        <ResponsiveSwitch 
            mobile={<MobileView />}
            tablet={<TabletView />}
        />
    );
}

function MobileView () {
    return (
        <>หน้าจอมือถือ</>
    );
}

function TabletView () {
    const [component, switchComponent] = useState<"itemlist" | "barcodescanner">("itemlist");
    return (
        <>
            <HomeHeader />
            {/* <hr className="flex self-center"/> */}
            <div className="relative mt-4">
                สแกนบาร์โค๊ดดิ: ปุ่ม1 ปุ่ม2 
                <div 
                    className={`rounded-2xl bg-gray-100`}
                >
                    {component === "itemlist" && <ItemList />}
                    {component === "barcodescanner" && <BarcodeScanner />}
                </div>
            </div>
        </>
    );
}