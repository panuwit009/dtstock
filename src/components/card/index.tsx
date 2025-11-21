"use client"
import { switchcolorbypercent } from "./function/switchcolorbypercent";
import { useShow } from "@/utils";
import type { Item } from "@/utils";
import { Modal } from "../modal";
import "./card.css"

export function Card ({item, handleImgLoad, allImgLoaded}: {item: Item; handleImgLoad: () => void; allImgLoaded:boolean;}) {
const max: number = 100;
const amountPercent: number = (item.amount * 100) / max;

const color = switchcolorbypercent(amountPercent);
const { setShow } = useShow();
    
function Click () {
    setShow(<Modal />) 
}

return (

<div
    className={`
        relative rounded-xl shadow-xl bg-white
        hover:shadow-2xl transition-all hover:cursor-pointer
        ring-0 hover:ring-2 hover:ring-emerald-400/50
        before:absolute before:inset-0 before:rounded-xl
        before:opacity-0 hover:before:opacity-100 before:transition-opacity`
    }
    onClick={Click}
>     
    <div className="w-full aspect-square overflow-hidden rounded-t-xl">
        { !allImgLoaded &&
            <div className="bg-gray-200 pulse h-full w-full" />
        }
        <img onLoad={handleImgLoad}
        onError={handleImgLoad}
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"/>

    </div>
        
    <div className="px-4 pb-4">
        <div className="grid grid-cols-1 space-y-1">
            <div className="relative flex items-center gap-4 w-full">
                <div className="w-full rounded">
                    { !allImgLoaded 
                        ? <div className="mt-1 w-full text-lg md:text-xl bg-gray-200 rounded-md pulse text-transparent">skeleton</div>
                        : <div className="mt-1 truncate text-lg md:text-xl">{item.name}</div>
                    }
                </div>
            </div>
            
            <div className="grid grid-cols-2">
                <div className="flex items-center text-sm 2xl:text-lg text-gray-600 gap-2">
                    { !allImgLoaded 
                        ? <span className="bg-gray-200 rounded-md pulse text-transparent">คงเหลือ</span>
                        : <span className="">คงเหลือ</span>
                    }
                </div>
                    
                <div className="flex justify-end items-center text-sm 2xl:text-lg text-gray-600 gap-1">
                    { !allImgLoaded 
                        ? <span className="bg-gray-200 rounded-md pulse text-transparent">00 ชิ้น</span>
                        : <span className="">{item.amount} ชิ้น</span>
                    }
                </div>
            </div>

            { !allImgLoaded 
                ? (
                <div className="mt-1 bg-gray-200 rounded-xl pulse">
                    <hr className="rounded-xl border-4 border-transparent w-full"/>
                </div> )
                : (
                <div className="mt-1 bg-gray-300 rounded-xl">
                    <hr className={`rounded-xl border-4 ${color}`} style={{ width: `${amountPercent}%` }} />
                </div> )
            }

            { !allImgLoaded 
                ? <div className={`mt-1 text-transparent text-[80%] flex justify-end bg-gray-200 rounded-xl pulse`}>00/00/0000</div>
                : <div className={`mt-1 text-gray-500 text-[80%] flex justify-end`}>{item.exp}</div>
            }
        </div>  
    </div>
</div>
);
}