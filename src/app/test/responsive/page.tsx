"use client";
import { useState, useEffect } from "react";
import { useCheckScreen } from "@/utils";

export default function TestResponsive () {
    const { current } = useCheckScreen();
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    return (
        <div className="flex flex-col justify-center items-center bg-green-100 h-screen w-screen">
            <div className="text-6xl">
                ขนาดจอ: {current}
            </div>
            <br />
            <p>ตำแหน่งเมาส์</p>
            <p>X: {position.x} | Y: {position.y}</p>
        </div>
    );
}
