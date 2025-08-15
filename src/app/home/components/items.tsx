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
            <div className="bg-red-200 w-[50%]">
                <p>รายการ</p>
                <div className="grid grid-cols-2">
                    {itemList.map((item) => 
                        <div className="border w-full h-30" key={item.id}>
                            <p>{item.name}</p>
                            <p>จำนวน {item.amount}</p>
                        </div>
                    )} 
                </div>
            </div>
        </div>
    );
}