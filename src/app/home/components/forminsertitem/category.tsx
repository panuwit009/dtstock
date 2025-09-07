import { categorys } from "../../insertdata"
import type { List } from "../../insertdata";
import React, { useState } from "react"

function Buttoncategory ({category, item, setItem}: {category: List; item: number | null; setItem: React.Dispatch<React.SetStateAction<number | null>>; }) {
   function click () {
    if (item === category.id) {
        setItem(null)
    } 
    else {
        setItem(category.id)
    }
}

    return (
        <button 
                onClick={click}
                className={`px-4 py-5 border-2 border-gray-300 rounded-2xl transition-all duration-300
                            ${item === category.id
                                ? 'bg-sky-500 border-sky-500 text-white scale-105'
                                : 'bg-white'
                    }
                            }`}>
                <div className="text-2xl mb-2">{category.icon}</div>                                        
                <div className="text-sm">{category.name}</div>                    
        </button>
    )
}

export default function Category () {
    const [item, setItem] = useState<number | null>(null)


    return (
        <div className="lg:col-span-4 space-y-3">

                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span className="font-semibold text-gray-700 text-lg">หมวดหมู่สินค้า</span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    {categorys.map((category) => (
                        <Buttoncategory category={category} item={item} setItem={setItem} key={category.id}/>
                    ))}
                </div>

         </div>
    )

}