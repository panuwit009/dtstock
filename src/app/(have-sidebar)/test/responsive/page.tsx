"use client";
import { useState, useEffect } from "react";
import { Tooltip } from "@/components";
import { useCheckScreen, useShow } from "@/utils";

export default function TestResponsive () {
    const { current } = useCheckScreen();
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { setShow } = useShow();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    return (
        <div className="flex flex-col justify-center items-center bg-green-100 h-full max-w-full">
            <div className="text-6xl">
                ขนาดจอ: {current}
            </div>
            <br />
            <p>ตำแหน่งเมาส์</p>
            <p>X: {position.x} | Y: {position.y}</p>
            <p className="absolute left-100 top-5 cursor-pointer"
                onMouseEnter={() => setShow(<Tooltip message="ทดสอบ"/>)}
                onMouseLeave={() => setShow(null)}
            >
                test Tooltip
            </p>
            <p className="absolute left-250 top-40 cursor-pointer"
                onMouseEnter={() => setShow(<Tooltip message="ทดสอบ"/>)}
                onMouseLeave={() => setShow(null)}
            >
                test Tooltip
            </p>
            <p className="absolute left-50 top-130 cursor-pointer"
                onMouseEnter={() => setShow(<Tooltip message="ทดสอบ"/>)}
                onMouseLeave={() => setShow(null)}
            >
                test Tooltip
            </p>
        </div>
    );
}
