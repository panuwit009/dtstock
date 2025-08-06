"use client";
import { useState } from "react";
function AddOrDecreaseStock() {
    const [stocktype, setStocktype] = useState("");
    function selectStocktype(st: string) {
        if(stocktype === st) {
            setStocktype("");
        } else {
            setStocktype(st)
        }
    }
    return (<>
    <span onClick={()=> selectStocktype("add")}
    className={`${stocktype === "add" && "underline text-blue-600"} select-none hover:cursor-pointer`}>เพิ่มสต๊อค</span> | <span
    onClick={()=> selectStocktype("dec")}
    className={`${stocktype === "dec" && "underline text-blue-600"}  select-none hover:cursor-pointer`}>ตัดสต๊อค</span>
    </>);
}
export default function Scanbarcode () {
    return (
        <div className="flex justify-center border rounded-lg">
            <div className="grid grid-rows-12 h-50">
                <div className="row-span-8 text-center">
                    <span>สแกนบาร์โค๊ดเพื่อ </span><AddOrDecreaseStock /> หรือ
                    <p className="underline text-blue-600 hover:cursor-pointer">คลิกที่นี่</p>
                    <p>เพื่อเพิ่มข้อมูลด้วยการพิมพ์</p>
                </div>
                <div className="row-span-4 text-center">
                    <p>เผื่อเพิ่มไรสักอย่าง</p>
                </div>
            </div>
        </div>
    );
}