"use client";
import { useState, useMemo, useRef } from "react";
import { Card } from "@/components/card";
import { magnify } from "@/components/svg";
import ItemSort from "./components/itemsort";
import { mockupdata } from "@/utils";

export default function ItemList () {
    const [itemList, setItemList] = useState(mockupdata);
    const [sort, setSort] = useState<"asc" | "desc" | null>(null);
    const [searchValue, setSearchValue] = useState<string | null>(null);

    const displayList = useMemo(() => {
        let filteredList = [...itemList];

        if (searchValue){
            filteredList = filteredList.filter(itemList =>
                itemList.name.toLowerCase().includes(searchValue.toLowerCase())
            );
        }

        if (sort === "asc") {
            return [...filteredList].sort((a, b) => a.amount - b.amount);
        } else if (sort === "desc") {
            return [...filteredList].sort((a, b) => b.amount - a.amount);
        } else {
            return filteredList;
        }
        
    }, [itemList, sort, searchValue]);

    const searchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
    };
    const imgCount = displayList.length;
    const loadedCount = useRef(0);
    const [allImgLoaded, setAllImgLoaded] = useState(false);

    function handleImgLoad() {
        loadedCount.current += 1;
        if (loadedCount.current === imgCount) {
            setAllImgLoaded(true);
        }
    }

    return (
        <div className="px-8 py-6 bg-gray-100 my-4 @container/itemlist rounded-xl">
            <header className="flex justify-between p-2">
                <div className="flex flex-col flex-1 space-y-2">
                    <h2 className="text-3xl font-bold text-black">รายการสินค้า</h2>
                    <p className="text-sm text-gray-700">ตรวจสอบสินค้า ณ ปัจจุบัน</p>
                </div>
                <div className="flex flex-col flex-1 items-end space-y-2">
                    <div className="relative">
                        <input
                        type="text"
                        onChange={searchInput}
                        placeholder="ค้นหาสินค้า..."
                        className="w-auto text-sm pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        { magnify }
                    </div>                        
                    <ItemSort sort={sort} setSort={setSort}/>
                </div>
            </header>

            <div 
                className="mt-4 grid grid-cols-3 @2xl/itemlist:grid-cols-4
                @4xl/itemlist:grid-cols-5 @6xl/itemlist:grid-cols-6
                gap-4 @2xl/itemlist:gap-5 @4xl/itemlist:gap-6"
            >
                {
                    displayList && displayList.length > 0
                    ? displayList.map((item) => (
                        <Card key={item.id} item={item} 
                            handleImgLoad={handleImgLoad} allImgLoaded={allImgLoaded}
                        />
                    ))
                    : <NotFoundDisplayList searchValue={searchValue}/>
                }
            </div>
        </div>
    );
}

function NotFoundDisplayList ({searchValue}: {searchValue: string | null}) {
    return (
        "ไม่พบรายการสินค้าที่ชื่อ: " + searchValue
    );
}