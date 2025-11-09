"use client";
import { useState } from "react";
import { StockManage, ItemList, HomeHeader, BarcodeScanner } from "@/components";

export default function Home () {
    const [component, switchComponent] = useState<"itemlist" | "barcodescanner">("itemlist");
    return (
        <div
            className="grid grid-rows-20 p-4 h-full"
        >
            <HomeHeader />
            {/* <hr className="flex self-center"/> */}
            <div className="mt-6 row-span-17 flex flex-row gap-10">
                <div 
                    className={`h-full flex-70 overflow-hidden rounded-2xl bg-gray-100
                    ${component === "barcodescanner"
                        ? "overflow-y-auto"
                        : "hover:overflow-y-auto [scrollbar-gutter:stable]"
                    }`}
                >
                    {component === "itemlist" && <ItemList />}
                    {component === "barcodescanner" && <BarcodeScanner />}
                </div>
                <div className="bg-sky-200/40 flex-30 overflow-y-auto rounded-2xl">
                    <StockManage switchComponent={switchComponent}/>
                </div>
            </div>
        </div>
    );
}