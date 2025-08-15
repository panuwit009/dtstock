"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AddOrDecreaseStock } from "./AddOrDecreaseStock";
import { openCamera } from "./openCamera";

export default function Scanbarcode () {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    return (
        <div className="flex justify-center rounded-lg">
            <div className="grid grid-rows-12 h-50 border border-black w-[50%]">
                <div className="row-span-8 text-center">
                    <span>สแกนบาร์โค๊ดเพื่อ </span>
                    <AddOrDecreaseStock /> หรือ
                    <p className="underline text-blue-600 hover:cursor-pointer">คลิกที่นี่</p>
                    <p>เพื่อเพิ่มข้อมูลด้วยการพิมพ์</p>
                </div>
                <div className="row-span-4 text-center">
                    <p className="hover:cursor-pointer"
                    onClick={() => openCamera({setError})}>ปุ่มเปิดกล้อง</p>
                    <p className="hover:cursor-pointer"
                    onClick={() => { alert("ออกจากระบบสำเร็จ"); router.push('/'); }}>Logout</p>
                    {error && <p className="text-red-500 hover:cursor-pointer" onClick={() => setError("")}>{error}</p>}
                </div>
            </div>
        </div>
    );
}