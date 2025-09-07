import Input from "./Input";
import Exp from "./exp";
import Textarea from "./textarea";
import Category from "./category";

export default function Body ({
  children, 
}: Readonly<{
  children?: React.ReactNode;
}>) {
    return (
            <div className="p-10 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 space-y-5">
                    <Input                      
                      label="ชื่อสินค้า"
                      placeholder="ระบุชื่อสินค้า..."
                      bg="bg-red-400"
                    />
                    
                   <Category/>

                  <div className="lg:col-span-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div className="lg:col-span-2 space-y-3">
                      <Input                      
                        label="จำนวน"
                        placeholder="กรอกจำนวนสินค้า..."
                        bg="bg-blue-400"
                      />
                    </div>

                    <div className="lg:col-span-2 space-y-3">
                      <Input                      
                        label="ประเภท"
                        placeholder="เลือกประเภทสินค้า..."
                        bg="bg-purple-400"
                      />
                    </div>
                  </div>

                  <Exp/>
                  <Textarea/>
                  
                </div>
            </div>

    )
}
