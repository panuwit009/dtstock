// mockup data
interface Item {
    id: number;
    name: string;
    amount: number;
}

const percent: number = 1000;
const itemList: Item[] = [
    {id: 1, name: "ที่ขูดหินปูน", amount: 17,}
    ,{id: 2, name: "ไหมขัดฟัน", amount: 74,}
    ,{id: 3, name: "แปรงสีฟัน", amount: 92,}
];

export default function Items () {
    return (
        // Container หลัก
        <div className="flex justify-center">
            {/* Container รอง */}
            <div className="w-[100%] md:w-[50%] md:rounded-xl">
                <div className="flex items-center justify-center bg-gradient-to-br from-sky-300 via-sky-400 to-sky-600 p-8 md:rounded-t-xl gap-4">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-label="product-checklist">
                        <rect x="4" y="6" width="16" height="14" rx="2" strokeWidth="2" />
                        <path d="M9 6V5a3 3 0 0 1 6 0v1" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 11l1.5 1.5L12 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 11h4" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 16l1.5 1.5L12 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 16h4" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    <p className="text-4xl font-bold text-white text-center">รายการสินค้าสต็อค</p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-gray-50 to-slate-100">

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                        {itemList.map((item) => {
                            const amountPercent = (item.amount) * 100 / 100;
                            let color = "";
                            
                            switch (true) {
                                case amountPercent >= 50 :
                                    color = "border-green-400";
                                    break;
                                case amountPercent <= 50 :
                                    color = "border-red-600";
                                    break;
                            }   
                            return (
                                <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-gray-100" key={item.id}>
                                    <div className="grid grid-cols-2 gap-4 flex items-center">
                                        
                                        <div className="flex items-center col-span-2 gap-4">
                                            <p className="w-12 h-12 flex justify-center items-center bg-gradient-to-br from-sky-400 to-sky-400 
                                            text-white font-bold p-4 text-2xl rounded-full">{item.id}</p>
                                            <div className="text-2xl">{item.name}</div>
                                        </div>

                                        {/* <div className="col-span-2 text-2xl">
                                            <p>{item.name}</p>
                                        </div> */}

                                        <div className="flex items-center text-lg text-gray-600 gap-2">
                                            <p>จำนวน</p>
                                            <p className="">{item.amount}</p>
                                            <p className="">ชิ้น</p>
                                        </div>

                                    </div>

                                    <div className="mt-3 bg-gray-300 rounded-xl">
                                        <hr className={`rounded-xl border-4 ${color}`} style={{ width: `${amountPercent}%` }}></hr>
                                    </div>
                            </div>
                            );
                        }
                        )} 
                    </div>
                </div>
            </div>
        </div>
    );
}