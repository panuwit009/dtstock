export default function FormInsertItem () {
    return (
        <div className="flex justify-center">

            <div className="w-[100%] md:w-[100%] max-w-3xl mt-4 bg-white rounded-lg shadow-lg ">
                <div className="bg-sky-500 p-6 md:rounded-t-lg">
                    <div className="text-white text-3xl font-semibold">
                        ฟอร์มนำเข้าสินค้า
                    </div>
                </div>


                <div className="bg-white md:rounded-b-2xl">
                    <div className="grid grid-rows-4 px-10 py-6 gap-4">

                            <div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        <span className="text-lg">ชื่อสินค้า</span> 
                                    </div>
                                    <div>
                                        <input className="border-2 border-gray-300 w-full p-2 rounded-xl p-3
                                                          focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200
                                                          placeholder:text-gray-400" 
                                               type="text" 
                                               placeholder ="ฟหกหฟ"/>  
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>                                        
                                        <span className="text-lg">หมวดหมู่สินค้า</span> 
                                    </div>
                                    <select className="bg-gray-200 w-full p-2 rounded-xl">
                                        <option value="">ครุภัณฑ์</option>
                                        <option value="">วัสดุทางทันตกรรม</option>
                                        <option value="">ยา</option>
                                        <option value="">ของขาย</option>
                                        <option value="">เวรภัณฑ์</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                        </svg>                                    
                                        <span className="text-lg">จำนวน</span>
                                    </div>
                                    <div>
                                        <input className="border-2 border-gray-300 w-full p-2 rounded-xl 
                                                          focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none transition-all duration-200" 
                                               type="number" />  
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="space-y-2">
                                    <div className="flex items-cente gap-2">
                                        <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>                                        
                                        <span>หมายเหตุ</span>   
                                    </div>
                                        
                                    <div>
                                        <input className="border-2 border-gray-300 w-full p-2 rounded-xl 
                                                          focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none transition-all duration-200" 
                                               type="text" />  
                                    </div>
                                </div>
                            </div>   

                            <div>
                                <button className="bg-sky-400 text-white rounded-full p-4 w-full">บันทึก</button>
                            </div>     
                    </div>
                        
                </div>
            
            </div>
        </div>
    );
}