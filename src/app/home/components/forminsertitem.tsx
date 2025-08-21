interface Item {
    id: number;
    name: string;
}

const itemList : Item[] = [
    {id: 1, name: "ชื่อสินค้า"}
    ,{id: 2, name: "หมวดหมู่สินค้า"}
    ,{id: 3, name: "จำนวน"}
    ,{id: 4, name: "สี"}
    ,{id: 5, name: "ชื่อบริษัท"}
];


export default function FormInsertItem () {
    return (
        <div className="flex justify-center">

            <div className="w-[100%] md:w-[100%] max-w-3xl mt-4 bg-white rounded-lg shadow-lg ">
                <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-8 md:rounded-t-lg">
                    <div className="text-white text-4xl font-bold flex items-center gap-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4m16 0l-3-3m3 3l-3 3M4 13l3-3m-3 3l3 3" />
                            </svg>
                        </div>
                        ฟอร์มนำเข้าสินค้า
                    </div>
                    <p className="text-blue-100 mt-2 text-lg">กรอกข้อมูลสินค้าเพื่อเพิ่มเข้าสู่ระบบ</p>
                </div>

                <div className="bg-white md:rounded-b-2xl">
                    <div className="px-12 py-6 space-y-6">

                            <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        <label htmlFor="username" className="block text-lg">ชื่อสินค้า</label> 
                                    </div>
                                    <div>
                                        <input className="border-2 border-gray-300 w-full p-2 rounded-xl p-3
                                                          focus:border-2 focus:border-sky-300 focus:ring-sky-300 outline-none transition-all duration-200
                                                          placeholder:text-gray-400" 
                                               type="text" 
                                               placeholder ="ระบุชื่อสินค้า"/>  
                                    </div>
                            </div>

                            <div className="grid grid-cols-12 gap-x-6 gap-y-6">
                                <div className="col-span-12 md:col-span-6 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>                                        
                                        <label className="text-lg">หมวดหมู่สินค้า</label> 
                                    </div>

                                    <div className="">
                                        <select className="border-2 border-gray-300 w-full p-2 rounded-xl p-3
                                                          focus:border-2 focus:border-sky-300 focus:ring-sky-300 outline-none transition-all duration-200
                                                          placeholder:text-gray-400">
                                            <option value="">ครุภัณฑ์</option>
                                            <option value="">วัสดุทางทันตกรรม</option>
                                            <option value="">ยา</option>
                                            <option value="">ของขาย</option>
                                            <option value="">เวรภัณฑ์</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-12 md:col-span-6 space-y-2">

                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                        </svg>                                    
                                        <label className="text-lg">จำนวน</label>
                                    </div>

                                    <div>
                                        <input className="border-2 border-gray-300 w-full p-2 rounded-xl p-3
                                                          focus:border-2 focus:border-sky-300 focus:ring-sky-300 outline-none transition-all duration-200
                                                          placeholder:text-gray-400" 
                                               type="number" 
                                               placeholder ="ระบุจำนวน"/>  
                                    </div>

                                </div>
                            </div>

                            <div className="space-y-2">
                                        <div className="flex items-cente gap-2">
                                            <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>                                        
                                            <label>หมายเหตุ</label>   
                                        </div>
                                            
                                        <div>
                                            <textarea className="border-2 border-gray-300 w-full p-2 rounded-xl p-3
                                                            focus:border-2 focus:border-sky-300 focus:ring-sky-300 outline-none transition-all duration-200
                                                            placeholder:text-gray-400"
                                                    name="" 
                                                    id=""
                                                    rows={3}></textarea>
                                        </div>
                            </div>

                                <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-xl text-white rounded-full p-4 w-full">บันทึก</button>
                    </div>
                        
                </div>
            
            </div>
        </div>
    );
}