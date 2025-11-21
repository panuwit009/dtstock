import { useShow } from "../../utils/showcontext"
import { overlay, overlayDismiss, overlayBlur } from "@/components";

export default function Modal () {
    const { setShow } = useShow();

    return (
        <>{overlayDismiss}
            <div id="myModal" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-36 w-[calc(100%-2rem)] lg:max-w-5xl overflow-y-auto">
                    <div className="bg-white rounded-xl flex flex-col p-4">

                        <header 
                            className="relative bg-[linear-gradient(to_right,#7DDD9D,#AEF05E)]
                            flex items-center p-8 gap-6"
                        >
                            <div className="bg-gray-200 rounded-xl w-40 h-40 shadow-md"/>

                                <div className="flex flex-col text-white gap-2">
                                    <span className="bg-white/70 text-slate-700 px-5 py-2 rounded-full w-fit text-sm font-thin">
                                        ครุภัณฑ์
                                    </span>
                                    <span className="text-3xl font-bold">โถส้วม</span>
                                    <span className="opacity-80">รหัสสินค้า : 1321554215</span>
                                </div>

                            <button 
                                onClick={() => setShow(null)}
                                className="absolute top-4 right-4 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow"
                            >
                                X
                            </button>
                        </header>

                        <div className="bg-gray-50">
                            <div className="grid grid-cols-3 gap-4">

                                <div 
                                    className="lg:col-span-2 col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4"
                                >
                                    <Card 
                                        className="bg-[#D0F4D5]" 
                                        label="คงเหลือ" 
                                        value="58" 
                                        unit="ชิ้น"
                                        icon="📦"
                                    />

                                    <Card 
                                        className="bg-[#D0ECF4]" 
                                        label="ราคา" 
                                        value="160" 
                                        unit="บาท/ชิ้น" 
                                        icon="💰"
                                    />

                                    <Card 
                                        className="bg-[#F4D0D0]" 
                                        label="ยอดขาย 7 วัน" 
                                        value="35" 
                                        unit="ชิ้น"
                                        icon="📈"
                                    />
                                </div>

                                <div className="lg:col-span-1 col-span-3 grid grid-rows-2 gap-2">

                                    <div 
                                        className="bg-gray-100/80 rounded-2xl border-2 border-gray-300 
                                        shadow-xs flex flex-col justify-center gap-3 p-3"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">ระดับสต็อก</span>
                                            <span className="text-xs rounded-lg px-3 py-1 bg-green-100 text-green-700">ปกติ</span>
                                        </div>
                                        <div className="bg-gray-300 rounded-xl">
                                            <div className="flex items-center">
                                                <hr className="rounded-xl border-4 border-[#AEF05E] w-full"></hr>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500">จำนวน : 56 ชิ้น</span>
                                            <span className="text-xs text-gray-500">สูงสุด : 100 ชิ้น</span>
                                        </div>

                                    </div>

                                    <div 
                                        className="bg-[#C9CCF3] rounded-2xl border-2 border-gray-300 
                                        flex flex-col justify-center p-2 gap-2"
                                    >

                                        <span className="font-thin text-gray-700">อัพเดทล่าสุด</span>
                                        <span className="font-bold text-xl">19/01/2568</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="">
                            <span>ข้อมูลทั่วไป</span>
                        </div>


                    </div>
            </div>
        </>
    )
}

export function Card ( { label, value, unit, icon, className }: { label: string; value: number | string; unit: string; icon?: string; className?: string } ) {
    return (
    <div 
        className={`${className} flex flex-col justify-center gap-7 p-4
        rounded-3xl border-2 border-gray-300`}>

        <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm font-medium tracking-wide">
                {label}
            </span>
            <span>
                {icon}
            </span>
        </div>
        <span className="text-5xl font-bold text-gray-800">
            {value}
        </span>
        <span className="text-sm font-thin font-thin text-gray-600">
            {unit}
        </span>
    </div>
    );
}