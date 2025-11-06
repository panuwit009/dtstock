"use client";
import { useState, useMemo } from "react";
import Cards from "./cards";
import ItemsSort from "./itemsSort.";
import { mockupdata } from "@/utils";

export default function Items () {
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
    } 

    return (
        // Container หลัก
        <div className="bg-gray-100 px-8 py-6 rounded-2xl">
            {/* Container รอง */}
            <div className="w-[100%]">
                <header className="flex justify-between items-start p-2">
                    <div className="flex flex-col space-y-2">
                        {/* <svg className="w-10 h-10 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-label="product-checklist">
                            <rect x="4" y="6" width="16" height="14" rx="2" strokeWidth="2" />
                            <path d="M9 6V5a3 3 0 0 1 6 0v1" strokeWidth="2" strokeLinecap="round" />
                            <path d="M8 11l1.5 1.5L12 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 11h4" strokeWidth="2" strokeLinecap="round" />
                            <path d="M8 16l1.5 1.5L12 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 16h4" strokeWidth="2" strokeLinecap="round" />
                        </svg> */}
                        <p className="text-3xl font-bold text-black">รายการสินค้า</p>
                        <div className="text-sm text-gray-700">ตรวจสอบสินค้า ณ ปัจจุบัน</div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="relative">
                            <input
                            type="text"
                            onChange={searchInput}
                            placeholder="ค้นหาสินค้า..."
                            className="w-auto text-sm pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <svg
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
                            </svg>
                        </div>                        
                        <ItemsSort sort={sort} setSort={setSort}/>
                    </div>
                </header>



                <div className="md:rounded-b-xl">

                    <div className="p-4 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-10">
                        {
                            displayList && displayList.length > 0
                            ? displayList.map((item) => <Cards item={item} key={item.id}/>)
                            : <NotFoundDisplayList searchValue={searchValue}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

function NotFoundDisplayList ({searchValue}: {searchValue: string | null}) {
    return (
        "ไม่พบรายการสินค้าที่ชื่อ: " + searchValue
    );
}