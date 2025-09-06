"use client";
import { useState, useMemo } from "react";
import Cards from "./cards";
import ItemsSort from "./itemsSort.";
import { mockupdata } from "../mockupdata";

export default function Items () {
    const [itemList, setItemList] = useState(mockupdata);
    const [sort, setSort] = useState<"asc" | "desc" | null>(null);

    const displayList = useMemo(() => {
        if (sort === "asc") {
            return [...itemList].sort((a, b) => a.amount - b.amount);
        } else if (sort === "desc") {
            return [...itemList].sort((a, b) => b.amount - a.amount);
        } else {
            return itemList;
        }
    }, [itemList, sort]);

    console.log(itemList);

    return (
        // Container หลัก
        <div className="flex justity-center">
            {/* Container รอง */}
            <div className="w-[100%]">
                <div className="flex items-center justify-center bg-gradient-to-r from-sky-700 to-sky-800 p-8 gap-4">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-label="product-checklist">
                        <rect x="4" y="6" width="16" height="14" rx="2" strokeWidth="2" />
                        <path d="M9 6V5a3 3 0 0 1 6 0v1" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 11l1.5 1.5L12 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 11h4" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 16l1.5 1.5L12 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 16h4" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    <p className="text-3xl md:text-4xl font-bold text-white text-center">รายการสินค้าสต็อค</p>
                </div>

                <ItemsSort sort={sort} setSort={setSort}/>

                <div className="p-4 md:p-6 bg-gradient-to-br from-gray-50 to-slate-100 md:rounded-b-xl">

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
                        {displayList.map((item) => <Cards item={item} key={item.id}/> )}
                    </div>
                </div>
            </div>
        </div>
    );
}