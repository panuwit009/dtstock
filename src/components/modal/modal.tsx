import { useShow } from "../../utils/showcontext"
import { overlay, overlayDismiss, overlayBlur } from "@/components";

export default function Modal () {
    const { setShow } = useShow();

    return (
        <>{overlayDismiss}
            <div id="myModal" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-36">
                    <div 
                        className="bg-white rounded-xl flex flex-col 
                        lg:min-w-4xl min-w-xl pt-8"
                    >

                        <header 
                            className="relative bg-[linear-gradient(to_right,#7DDD9D,#AEF05E)]
                            flex items-center p-8 gap-6"
                        >
                            <div className="bg-gray-200 rounded-xl w-40 h-40 shadow-md"/>

                            <div className="flex flex-col text-white gap-2">
                                <div className="bg-white/70 text-slate-700 px-5 py-2 rounded-full w-fit text-sm font-thin">
                                    ครุภัณฑ์
                                </div>
                                <div className="text-3xl font-bold">โถส้วม</div>
                                <div className="opacity-80">รหัสสินค้า : 1321554215</div>
                            </div>

                            <button 
                                onClick={() => setShow(null)}
                                className="absolute top-4 right-4 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow"
                            >
                                X
                            </button>
                        </header>

                        <div className="grid grid-cols-3 gap-4 p-4 bg-yellow-400">

                            <div className="lg:col-span-2 col-span-3 grid grid-cols-3 gap-4 h-full">
                                <Test className="bg-[#D0F4D5]/60 rounded-xl h-full" label="คงเหลือ" value="58" unit="ชิ้น" />
                                <Test className="bg-[#D0ECF4]/60 rounded-xl h-full" label="ราคา" value="160" unit="บาท/ชิ้น" />
                                <Test className="bg-[#F4D0D0]/60 rounded-xl h-full" label="ยอดขาย 7 วัน" value="160" unit="ชิ้น" />
                            </div>

                            <div className="lg:col-span-1 col-span-3 grid grid-rows-2 gap-4 h-full">
                                <div className="bg-gray-100 rounded-lg px-3 py-2 h-full"></div>
                                <div className="bg-[#E3E9F8] rounded-lg px-3 py-2 h-full"></div>
                            </div>

                        </div>


      
                    </div>
            </div>
        </>
    )
}

export function Test ( { label, value, unit, className }: { label: string; value: number | string; unit: string; className?: string } ) {
    return (
    <div 
        className={`${className} flex flex-col gap-6 p-4 
        rounded-xl ring-2 ring-gray-200`}>
        <div className="text-gray-500 text-xs">
            {label}
        </div>
        <div className="text-4xl">
            {value}
        </div>
        <div className="text-xs font-thin text-gray-600">
            {unit}
        </div>
    </div>
    );
}