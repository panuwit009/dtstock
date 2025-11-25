import { useShow } from "@/utils"
import { overlay, overlayDismiss, overlayBlur } from "@/components";
import { PackageIcon, CalendarIcon, ChartIcon, QrCodeIcon, CloseTab, EditIcon } from "../svg"
import { Item } from "@/utils";

export default function Modal ({item, color, amountPercent} : {
    item: Item; 
    color: string | null; 
    amountPercent: number; 
}) {
    const { setShow } = useShow();

    return (
        <>
            {overlayDismiss}
            <div 
                id="myModal" 
                className="
                    fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-36 
                    w-[calc(100%-4rem)] lg:max-w-5xl max-h-[90vh]
                    overflow-y-auto"
            >

                    <div 
                        className="
                        bg-white rounded-xl 
                        flex flex-col 
                        pt-7"
                    >

                        <header 
                            className="
                                relative bg-[linear-gradient(to_right,#7DDD9D,#AEF05E)]
                                flex items-center 
                                p-8 gap-6"
                        >
                            <div 
                                className="
                                    bg-gray-200 rounded-3xl overflow-hidden 
                                    w-44 h-44 shadow-md
                                    aspect-square"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>


                                <div className="flex flex-col text-white gap-2">
                                    <span 
                                        className="
                                        bg-white/70 text-slate-700 
                                        rounded-full
                                        px-5 py-2 
                                        w-fit 
                                        text-sm font-thin"
                                    >
                                        ครุภัณฑ์
                                    </span>
                                    <span className="text-3xl font-bold">{item.name}</span>
                                    <span className="opacity-80 font-thin">รหัสสินค้า : 1321554215</span>
                                </div>

                            <button 
                                onClick={() => setShow(null)}
                                className="
                                absolute top-4 right-4 
                                bg-white rounded-full shadow-md
                                w-10 h-10 
                                flex items-center justify-center"
                            >
                                <CloseTab/>
                            </button>
                        </header>

                        <div className="bg-gray-50 p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                                {/* left */}
                                <div 
                                    className=" 
                                        col-span-3 lg:col-span-2 
                                        grid grid-cols-1 sm:grid-cols-3
                                        gap-4"
                                >

                                    <Card 
                                        className="bg-[#D0F4D5]/60" 
                                        label="คงเหลือ" 
                                        value={item.amount} 
                                        unit="ชิ้น"
                                        icon="📦"
                                    />

                                    <Card 
                                        className="bg-[#D0ECF4]/60" 
                                        label="ราคา" 
                                        value="-" 
                                        unit="บาท/ชิ้น" 
                                        icon="💰"
                                    />

                                    <Card 
                                        className="bg-[#F4D0D0]/60" 
                                        label="ยอดขาย 7 วัน" 
                                        value="-" 
                                        unit="ชิ้น"
                                        icon="📈"
                                    />
                                </div>


                                {/* right */}
                                <div className="lg:col-span-1 col-span-3">
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">

                                        <div 
                                            className="
                                              bg-[#E4E4E4]/55 rounded-2xl shadow-md
                                                border border-gray-400/55 
                                                flex flex-col 
                                                gap-2 p-3"
                                        >

                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">ระดับสต็อก</span>
                                                <span className="text-xs rounded-lg px-3 py-1 bg-green-400/10 text-green-600/90">ปกติ</span>
                                            </div>
                                            <div className="bg-gray-300 rounded-xl">
                                                <div className="flex items-center">
                                                    <hr className={`rounded-xl border-4 ${color}`} style={{ width: `${amountPercent}%` }} />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-gray-500">จำนวน : 56 ชิ้น</span>
                                                <span className="text-xs text-gray-500">สูงสุด : 100 ชิ้น</span>
                                            </div>
                                        </div>

                                        <div 
                                            className="
                                              bg-[#E3E9F8] rounded-2xl shadow-md
                                                border border-[#C9CCF3] 
                                                flex flex-col justify-center 
                                                p-3 gap-2"
                                        >

                                            <div className="flex items-center gap-1">
                                                <CalendarIcon className="w-4 h-4 text-blue-500"/>
                                                <span className="font-light text-gray-700">วันหมดอายุ</span>
                                            </div>
                                            <span className="font-bold text-xl">{item.exp}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-3">
                                    <header className="text-center md:text-left text-lg font-semibold text-gray-800 mb-4">
                                        ข้อมูลทั่วไป
                                    </header>

                                    <div 
                                        className="
                                        grid grid-cols-1 md:grid-cols-[45%_55%]
                                        items-center
                                        gap-4 md:gap-0
                                    "> 

                                        {/* left */}
                                        <div className="flex justify-center md:justify-start gap-12">
                                            
                                            <div className="flex items-center gap-3">
                                                <div className="flex bg-gray-200 rounded-xl p-2">
                                                    <PackageIcon className="w-7 h-7 text-gray-600" />
                                                </div>
                                                <div className="flex flex-col min-w-0">
                                                    <span className="text-sm text-gray-500">ชื่อสินค้า</span>
                                                    <span className="text-base font-medium text-gray-900 truncate">
                                                        {item.name}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="flex bg-gray-200 rounded-xl p-2">
                                                    <ChartIcon className="w-6 h-6 text-gray-500" />
                                                </div>
                                                <div className="flex flex-col min-w-0">
                                                    <span className="text-sm text-gray-500">หมวดหมู่</span>
                                                    <span className="text-base font-medium text-gray-900 truncate">
                                                        ครุภัณฑ์
                                                    </span>
                                                </div>
                                            </div>

                                        </div>

                                        {/* right */}
                                        <div className="flex flex-col sm:flex-row items-center gap-4">

                                            <div 
                                                className="
                                                bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-md 
                                                flex items-center justify-center
                                                gap-1 py-2 sm:py-1
                                                w-full"
                                            >
                                                <EditIcon className="w-5 h-5 text-white"/>
                                                <button className="text-white">แก้ไขข้อมูล</button>
                                             </div>          

                                            <div 
                                                className="
                                                bg-white shadow-md rounded-lg
                                                flex items-center justify-center
                                                border border-gray-400/55 
                                                gap-1 py-2 sm:py-1
                                                w-full"
                                            >
                                                <PackageIcon className="w-6.5 h-6.5 text-gray-700"/> 
                                                <button className="w-fulltext-gray-900/70 font-thin">เพิ่มสต๊อก</button>
                                            </div>

                                            <div className="">
                                                <button 
                                                    className="w-full sm:w-auto
                                                    bg-white shadow-md rounded-lg
                                                    border border-gray-400/55 
                                                    flex items-center justify-center
                                                    text-black font-thin
                                                    py-2 sm:p-1 "
                                                ><QrCodeIcon /> </button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export function Card ( { label, value, unit, icon, className }: { label: string; value: number | string; unit: string; icon?: string; className?: string } ) {
    return (
    <div 
        className={`${className} 
            flex flex-col justify-center 
            rounded-3xl shadow-md
            border border-gray-400/55 
            gap-8 px-4 py-2`}
    >

        <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm font-medium tracking-wide">
                {label}
            </span>
            <span>
                {icon}
            </span>
        </div>
        <span className="text-5xl font-bold text-gray-700">
            {value}
        </span>
        <span className="text-sm font-thin text-gray-600">
            {unit}
        </span>
    </div>
    );
}