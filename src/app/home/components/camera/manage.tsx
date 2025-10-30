import type { CameraResult } from "@/app/type";
export function Manage({ cameraResult }: { cameraResult: CameraResult; }) {
    const mockUp = [
        {
            "barcode": "http://en.m.wikipedia.org"
        },
        {
            "barcode": "http://en.m.wikipedia.org"
        }
    ];
    
    return (
        <div
        className={`bg-white z-2
            fixed inset-0 h-[100dvh] w-[100dvw]
            transition-transform duration-300 ease-in-out
        `}
        >
            <div className="w-full h-[20vh]" />
            <div className="w-full h-[60vh] max-h-[60vh] overflow-y-auto px-4">
                <p className="text-xl font-bold mt-4">รายการสินค้า</p>

                { mockUp.length > 0
                ? mockUp.map((result, index) =>
                <div className="mt-2 bg-red-100 h-10 w-full">
                    {index + 1}. {result.barcode}
                </div>)
                :
                <p className="text-lg text-gray-600 mt-2">ยังไม่ได้สแกนบาร์โค๊ด</p>
                }             
            </div>
        </div>
    );
}
