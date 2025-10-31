import React from "react";
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
        className={`bg-gray-300 z-2 fixed inset-0 h-[100dvh] w-[100dvw]
            flex justify-center
        `}
        >
            <div className="w-110 h-full bg-white">
                <div className="w-full h-[20vh]" />
                <div className="w-full h-[60vh] max-h-[60vh] overflow-y-auto px-4">
                    <p className="text-xl font-bold mt-8 mb-4">รายการสินค้า</p>

                    { mockUp.length > 0
                    ? mockUp.map((result, index) =>
                    <React.Fragment key={index}>
                        <div className="flex w-full max-h-22 mt-2"
                        >
                            {/* {index + 1}. {result.barcode} */}
                            <div className="w-23 flex items-center">
                                <img 
                                    className="w-18 h-18 rounded-2xl mt-2 mb-2"
                                    src="https://webtntlprd.blob.core.windows.net/content/1671768873047-2555.webp"
                                />
                            </div>
                            <div className="w-57 flex-shrink max-w-full">
                                <p className="font-bold truncate mt-2">น้ำทิพย์ น้ำดื่ม 1500 มล.</p>
                                <p className="line-clamp-3 text-xs text-gray-600">น้ำทิพย์ น้ำดื่มคุณภาพที่ได้รับการรับรองในระดับสากล ให้คุณมั่นใจในคุณภาพจากทุกขวดที่ดื่ม โดยบรรจุมาในขวด Eco ที่คิดมาเพื่อโลก</p>
                            </div>
                            <div className="w-23">รอใส่ปุ่มแปปนึง</div>
                        </div>
                        <hr className="w-full border-t-1 border-[#73ACF6]"/>
                    </React.Fragment>)
                    :
                    <p className="text-lg text-gray-600 mt-2">ยังไม่ได้สแกนบาร์โค๊ด</p>
                    }             
                </div>
            </div>
        </div>
    );
}
