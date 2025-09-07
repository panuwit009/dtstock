import Header from "./forminsertitem/Header";
import Body from "./forminsertitem/Body";

export default function FormInsertItem ({onClose}: {onClose: ()=> void} ) {

    return (
        <div className="fixed inset-0 flex items-center justify-center lg:bg-black/40 z-50">
            <div className="bg-white w-full lg:max-w-4xl mx-auto lg:rounded-2xl relative">

            <div onClick={onClose} className="absolute top-2 right-4 text-white">X</div>
            
                <Header 
                    Title="เพิ่มสินค้าใหม่" 
                    decription="กรอกข้อมูลสินค้าเพื่อเพิ่มเข้าสู่ระบบ"
                    Font="font-semibold">
                </Header>


                <Body/>

            </div>



        </div>
 
    );
}