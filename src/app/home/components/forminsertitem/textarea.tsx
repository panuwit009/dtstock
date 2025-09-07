export default function Textarea () {
    return (
                    <div className="lg:col-span-4 space-y-3">
                                <label className="flex items-center space-x-2 text-lg font-semibold text-gray-700">
                                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                                    <span>หมายเหตุ</span>
                                </label>
                                <textarea
                                    rows={4}
                                    className="bg-gray-100/30 border-2 border-gray-300 rounded-2xl w-full p-4 
                                                placeholder:font-semibold placeholder:text-gray-400
                                             focus:border-black focus:ring-0 outline-none
                                                transition-all duration-300"
                                    placeholder="เพิ่มหมายเหตุหรือรายละเอียดเพิ่มเติม..."/>
                    </div>
    )
}