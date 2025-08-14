"use client";
import { useState } from "react";

export function AddOrDecreaseStock() {
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