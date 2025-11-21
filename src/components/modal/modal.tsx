import { useShow } from "@/utils"

export default function Modal () {
    const { setShow } = useShow();

    return (
        <>
            <div id="myModal" className="fixed inset-0 bg-black/40 flex items-center justify-center z-1">
                <div className="">
                    <div className="bg-white p-2 rounded-xl gap-2 flex flex-col">
                        <div className="flex items-center justify-center">
                            <div>
                                <div className="text-2xl">show?.detail?.message</div>
                            </div>
                            <div className="flex justify-end">
                                <button onClick={() => setShow(null)} className="">ssss</button>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <input className="p-2 border-2 border-blue-400" type="text" />
                            <button className="text-2xl bg-blue-400 p-4 rounded-xl text-white font-semibold">เพิ่ม</button>
                        </div>
                        <div className="flex gap-2">
                            <input className="p-2 border-2 border-blue-400" type="text" />
                            <button className="w-full text-2xl bg-red-400 p-4 rounded-xl text-white font-semibold">ลด</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}