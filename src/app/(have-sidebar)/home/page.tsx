import { StockManage, ItemList, HomeHeader } from "@/components";

export default function Home () {
    return (
        <div
            className="grid grid-rows-20 px-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700
            h-full"
        >
            <HomeHeader />
            {/* <hr className="flex self-center"/> */}
            <div className="mt-6 row-span-17 flex flex-row gap-10">
                <div className="h-full flex-70 overflow-hidden hover:overflow-y-auto [scrollbar-gutter:stable]">
                    <ItemList />
                </div>
                <div className="bg-sky-200/40 flex-30 overflow-y-auto rounded-2xl">
                    <StockManage />
                </div>
            </div>
        </div>
    );
}