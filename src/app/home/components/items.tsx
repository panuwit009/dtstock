// mockup data
interface Item {
    id: number;
    name: string;
    amount: number;
}

const itemList: Item[] = [
    {id: 1, name: "ที่ขูดหินปูน", amount: 5}
    ,{id: 2, name: "ไหมขัดฟัน", amount: 7}
    ,{id: 3, name: "แปรงสีฟัน", amount: 12}
];

export default function Items () {
    return (
        // Container หลัก
        <div className="flex justify-center">
            {/* Container รอง */}
            <div className="w-[100%] md:w-[50%] md:rounded-xl">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 md:rounded-t-lg">
                    <p className="text-4xl font-bold text-white text-center">รายการสินค้าสต็อค</p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-gray-50 to-slate-100">


                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {itemList.map((item) => 
                            <div className="bg-white p-4 rounded-2xl shadow-xl hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-gray-100" key={item.id}>
                                <div className="grid grid-cols-2 gap-4 flex items-center">
                                    
                                    <div className="col-span-2">
                                        <p className="w-12 h-12 flex justify-center items-center bg-gradient-to-br from-sky-400 to-sky-500 text-white font-bold p-4 text-2xl rounded-full">{item.id}</p>
                                    </div>

                                    <div className="col-span-2 text-2xl">
                                        <p>{item.name}</p>
                                    </div>

                                    <div className="text-lg text-gray-600">
                                        <p>จำนวน</p>
                                    </div>

                                    <div className="flex items-center justify-end text-2xl gap-2">
                                        <p className="w-6 h-6 bg-green-400 flex items-center justify-center rounded-full p-5">{item.amount}</p>
                                        <p className="">ชิ้น</p>
                                    </div>

                                </div>
                                        <hr className="border-2 border-green-400"></hr>
                            </div>
                        )} 
                    </div>
                </div>
            </div>
        </div>
    );
}