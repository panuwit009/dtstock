import type { Item } from "../mockupdata";
import { cardsClick } from "./cardsClick";
import { cardsSwitchPercentColor } from "./cardsSwitchPercentColor";

export default function Cards ({item}: {item: Item}) {
const max: number = 100;
const amountPercent: number = (item.amount * 100) / max;

const color = cardsSwitchPercentColor(amountPercent);

return (
<div className={`relative bg-white rounded-xl shadow-xl hover:shadow-xl transition duration-300 hover:-translate-y-2 hover:cursor-pointer`}
onClick={()=> cardsClick(item) }
>
    {/* <p className="absolute -top-1 -left-4 w-12 h-12 flex justify-center items-center bg-gradient-to-r from-sky-700 to-sky-800
    text-white font-bold p-4 text-2xl rounded-full">{item.id}</p> */}
        
    <div className="pb-2 w-full aspect-square overflow-hidden rounded-t-xl">
        <img 
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"/>
    </div>
        
    <div className="px-4 pb-4">
        <div className="grid grid-cols gap-4">
            <div className="relative flex items-center gap-4">
                <div className="group w-40 md:w-65"> 
                    <div className="truncate text-lg md:text-xl">
                        {item.name}
                    </div>
                    <div className="absolute left-0 top-full mt-1 hidden group-hover:block 
                    bg-black text-white text-lg px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap">
                        {item.name}
                    </div>
                </div>
            </div>
                
            {/* <div className="col-span-2 text-2xl">
            <p>{item.name}</p>
            </div> */}
        </div>
            
        <div className="grid grid-cols-2">
            <div className="flex items-center text-sm md:text-lg text-gray-600 gap-2">
                <p className="">คงเหลือ</p>
            </div>
                
            <div className="flex justify-end items-center text-sm md:text-lg text-gray-600 gap-2">
                <p className="">{item.amount}</p>
                <p className="">ชิ้น</p>
            </div>
        </div>
            
        <div className="mt-3 bg-gray-300 rounded-xl">
            <hr className={`rounded-xl border-4 ${color}`} style={{ width: `${amountPercent}%` }}></hr>
        </div>
    </div>
</div>
);
}