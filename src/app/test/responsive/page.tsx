"use client";
import { useCheckScreen } from "@/utils";

export default function TestResponsive () {
    const { current } = useCheckScreen();
    return (
        <div className="flex justify-center items-center bg-green-100 h-screen w-screen">
            <div className="text-6xl">
                ขนาดจอ: {current}
            </div>
        </div>
    );
    

}