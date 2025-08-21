// mockup data
interface Item {
    id: number;
    name: string;
    amount: number;
    image: string;
}

const percent: number = 1000;
const itemList: Item[] = [
    {id: 1, name: "ที่ขูดหินปูน", amount: 17, image:"https://thaigroomingworld.com/cdn/shop/files/1_0c089071-3919-4233-ab7f-150f0ad59afe.jpg?v=1701003675&width=600"}
    ,{id: 2, name: "ไหมขัดฟัน", amount: 74, image:"https://www.willdentdentalclinic.com/wp-content/uploads/2022/11/image2-6.png"}
    ,{id: 3, name: "แปรงสีฟัน", amount: 92, image:"https://dragcura.com/wp-content/uploads/2024/09/edelwhite-cleancurl-1.webp"}
    ,{ id: 4, name: "ยาพารา", amount: 20, image:"https://get.pxhere.com/photo/tree-horizon-road-field-prairie-highway-driving-asphalt-dirt-road-open-road-lane-plain-road-trip-grassland-infrastructure-rural-area-road-surface-nonbuilding-structure-controlled-access-highway-1456.jpg" }
    ,{ id: 5, name: "ยาย่าฉันไม่ใช่เทวดา", amount: 60, image:"https://cms.dmpcdn.com/musicarticle/2019/02/21/3fc84571-0385-4ee7-adfd-aac80b799175.jpg" }
    ,{ id: 6, name: "ยาดม", amount: 40, image:"https://www.mocagrimart.com/th/file/get/file/20230430d0164eceeb84beb9f4898f11d6a4ba5b132241.jpg" }

];

export default function Items () {
    return (
        // Container หลัก
        <div className="flex justity-center">
            {/* Container รอง */}
            <div className="w-[100%]">
                <div className="flex items-center justify-center bg-gradient-to-r from-sky-700 to-sky-800 p-8 gap-4">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-label="product-checklist">
                        <rect x="4" y="6" width="16" height="14" rx="2" strokeWidth="2" />
                        <path d="M9 6V5a3 3 0 0 1 6 0v1" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 11l1.5 1.5L12 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 11h4" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 16l1.5 1.5L12 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 16h4" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    <p className="text-3xl md:text-4xl font-bold text-white text-center">รายการสินค้าสต็อค</p>
                </div>

                <div className="p-4 md:p-6 bg-gradient-to-br from-gray-50 to-slate-100 md:rounded-b-xl">

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-6">
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
                                <div className={`relative bg-white p-6 rounded-xl shadow-xl hover:shadow-xl transition duration-300 hover:-translate-y-2`} key={item.id}>
                                    
                                {/* <p className="absolute -top-1 -left-4 w-12 h-12 flex justify-center items-center bg-gradient-to-r from-sky-700 to-sky-800
                                                                            text-white font-bold p-4 text-2xl rounded-full">{item.id}</p> */}

                                        <div className="flex justify-center mb-4">
                                            <img 
                                                src={item.image}
                                                alt={item.name}
                                                className="w-30 h-30 md:w-60 md:h-60 object-cover rounded-lg "/>
                                        </div>
                                
                                    
                                    <div className="grid grid-cols-2 gap-4 flex items-center">
                                        
                                        <div className="flex items-center gap-4">
                                            
                                            <div className="relative group w-40"> 

                                                <div className="truncate text-lg md:text-xl">
                                                    {item.name}
                                                </div>

                                                <div className="absolute left-0 top-full mt-1 hidden group-hover:block 
                                                                bg-black text-white text-lg px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap">
                                                    {item.name}
                                                </div>
                                            </div>

                                        </div>

                                        {/* <div className="col-span-2 text-2xl">
                                            <p>{item.name}</p>
                                        </div> */}

                                    </div>

                                    <div className="grid grid-cols-2">
                                        <div className="flex items-center text-sm md:text-lg text-gray-600 gap-2">
                                            <p className="">คงเหลือ</p>
                                        </div>


                                        <div className="flex justify-end items-center text-sm md:text-lg text-gray-600 gap-2">
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