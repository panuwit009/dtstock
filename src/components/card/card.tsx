"use client"
import { switchcolorbypercent } from "./function/switchcolorbypercent";
import { useShow } from "@/utils";
import type { Item } from "@/utils";
import { Modal } from "@/components";
import { useState } from "react";
import "./card.css"

function Card ({item}: {item: Item}) {
const max: number = 100;
const amountPercent: number = (item.amount * 100) / max;
const [imgloading, setimgloading] = useState(true);

const color = switchcolorbypercent(amountPercent);
const { setShow } = useShow();
    
function Click () {
    setShow(<Modal />) 
}

return (

<div
    className={`relative rounded-xl shadow-xl
        hover:shadow-xl transition duration-300  hover:cursor-pointer`}
    onClick={Click}
>
    {/* <p className="absolute -top-1 -left-4 w-12 h-12 flex justify-center items-center bg-gradient-to-r from-sky-700 to-sky-800
    text-white font-bold p-4 text-2xl rounded-full">{item.id}</p> */}
        
    <div className="w-full aspect-square overflow-hidden rounded-t-xl">
        { imgloading &&
            <div className="bg-gray-200 pulse h-full w-full"></div>
        }
        <img onLoad={() => {
            setimgloading(false); 
            }}
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"/>

    </div>
        
    <div className="px-4 pb-4">
            <div className="grid grid-cols-1 space-y-1">
                <div className="relative flex items-center gap-4 w-full">
                    <div className="group max-w-full rounded">
                        <div className="mt-1 truncate text-lg md:text-xl">
                            {item.name}
                        </div>
                        <div className="absolute left-0 top-full mt-1 hidden group-hover:block 
                        bg-black text-white text-lg px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap">
                            {item.name}
                        </div>  
                    </div>
                </div>
                
                <div className="grid grid-cols-2">
                    <div className="flex items-center text-sm 2xl:text-lg text-gray-600 gap-2">
                        <p className="">คงเหลือ</p>
                    </div>
                        
                    <div className="flex justify-end items-center text-sm 2xl:text-lg text-gray-600 gap-1">
                        <p className="">{item.amount}</p>
                        <p className="">ชิ้น</p>
                    </div>
                </div>

                <div className="mt-1 bg-gray-300 rounded-xl">
                    <div className="flex items-center">
                        <hr className={`rounded-xl border-4 ${color}`} style={{ width: `${amountPercent}%` }}></hr>
                {/* <hr className={`border-4 border-green-500`} style={{ width: `${amountPercent}%` }}></hr> */}
                    </div>
                </div>

                <div className="mt-1 text-gray-500 text-[80%] flex justify-end">
                    {item.exp}
                </div>

                    
                {/* <div className="col-span-2 text-2xl">
                <p>{item.name}</p>
                </div> */}
            </div>
            
    </div>
</div>
);
}

import CardSkeleton from "./skeleton";
Card.Skeleton = CardSkeleton;
export default Card;