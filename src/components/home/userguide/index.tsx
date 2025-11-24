import { Info, Camera, Plus } from "@/components/svg";

export default function HomeUserGuide () {
    return (
        <div 
            className="bg-green-100 rounded-xl min-h-20 
            flex justify-between items-center px-4 space-x-4 @container/homeUserGuide"
        >
            <div className="flex flex-row justify-center items-center gap-2">
                <Info className="w-8 h-8 cursor-pointer flex-shrink-0"/>
                <span className="text-md @lg/homeUserGuide:text-lg">สแกนบาร์โค๊ดเพื่อจัดการสินค้า</span>
            </div>
            <div className="flex justify-center items-center gap-2 @4xl/homeUserGuide:gap-4">
                <span className="text-sm text-gray-500 hidden @3xl/homeUserGuide:block">เครื่องสแกนบาร์โค๊ดใช้งานไม่ได้  ?</span>
                <div className="flex flex-col items-center">
                    <div className="flex gap-4 mt-2 @3xl/homeUserGuide:mt-0">          
                        <button className="bg-white p-2 rounded-md cursor-pointer hover:bg-blue-100 flex items-center gap-2">
                            <Camera />
                            <span className="hidden @xl/homeUserGuide:block">เปิดกล้อง</span>
                        </button>
                        <button className="bg-white p-2 rounded-md cursor-pointer hover:bg-blue-100 flex items-center gap-2">
                            <Plus />
                            <span className="hidden @xl/homeUserGuide:block">เพิ่มรายการใหม่</span>
                        </button>
                    </div>
                    <span className="text-xs @lg/homeUserGuide:text-sm text-gray-500 mt-2 @3xl/homeUserGuide:hidden">เครื่องสแกนบาร์โค๊ดใช้งานไม่ได้  ?</span>
                </div>
            </div>
        </div>
    );
}