import type { CameraResult } from "@/type";
import { overlayBlur } from "../../overlay";
export const Afterscan = (
    { data, setShow, waitScanbarcode, setCameraResult }:
    { 
        data: string;
        setShow: React.Dispatch<React.SetStateAction<React.JSX.Element | null>>;
        waitScanbarcode: () => Promise<void>;
        setCameraResult: React.Dispatch<React.SetStateAction<CameraResult>>;
    }
) => {
    return (
    <>
    {overlayBlur}
    <div className="fixed inset-0 flex justify-center items-center border border-white/40 z-50">
        <div className="bg-white p-6 rounded-2xl shadow-xl max-h-[90%] w-87 overflow-y-auto no-scrollbar">
            <img 
                className="h-50 mx-auto rounded-2xl mb-4"
                src="https://webtntlprd.blob.core.windows.net/content/1671768873047-2555.webp"
                alt="ชื่อสินค้า"
            />
            <h2 className="text-lg font-semibold mb-2">น้ำทิพย์ น้ำดื่ม 1500 มล.</h2>
            <p>น้ำทิพย์ น้ำดื่มคุณภาพที่ได้รับการรับรองในระดับสากล ให้คุณมั่นใจในคุณภาพจากทุกขวดที่ดื่ม โดยบรรจุมาในขวด Eco ที่คิดมาเพื่อโลก</p>
            <p className="text-gray-400 break-all">Barcode: {data}</p>
            <p className="mt-4 text-center">เพิ่มสินค้านี้ลงในรายการ ?</p>

            <div className=" flex justify-between">
                <button className="w-35 bg-red-500 text-white px-4 py-2 rounded-lg hover:cursor-pointer"
                    onClick={() => { setShow(null); waitScanbarcode(); }}
                >
                    ยกเลิก
                </button>
                <button className="w-35 bg-blue-500 text-white px-4 py-2 rounded-lg hover:cursor-pointer"
                    onClick={() => { setShow(null); waitScanbarcode(); setCameraResult( p => [ ...p, { barcode: data ?? "" }]);}}
                >
                    ตกลง
                </button>
            </div>
        </div>
    </div>
    </>
    );
};