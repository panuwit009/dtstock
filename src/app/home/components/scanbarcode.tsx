export default function Scanbarcode () {
    return (
        <div className="flex justify-center border rounded-lg">
            <div className="grid grid-rows-12 h-50">
                <div className="row-span-8 text-center">
                    <p>สแกนบาร์โค๊ดเพื่อจัดการสต๊อค หรือ</p>
                    <p className="underline text-blue-600 hover:cursor-pointer">คลิกที่นี่</p>
                    <p>เพื่อเพิ่มข้อมูลด้วยการพิมพ์</p>
                </div>
                <div className="row-span-4 text-center">
                    <p>เผื่อเพิ่มไรสักอย่าง</p>
                </div>
            </div>
        </div>
    );
}