import { closeCamera } from "./openCamera";
export default function CameraUi ({setOpenCamera}: {setOpenCamera: React.Dispatch<React.SetStateAction<boolean>>}) {
    const stopCamera = (): void => {
        setOpenCamera(false);
        closeCamera();
    }
    return (
    <div className="relative w-full">
        {/* id ของ video ต้องเท่ากับ video เพราะในฟังก์ชันเปิดกล้องน่าจะ getelementbyid*/}
        <video id="video" className="w-full"/>
        {/* เส้นแนวนอน */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-500"></div>
        <button onClick={stopCamera}
        className="absolute top-3 right-3 mr-3 px-3 py-1
        bg-red-600 text-white rounded-full shadow hover:bg-red-700">
            ปิด
        </button>
        {/* เส้นแนวตั้ง */}
        {/* <div className="absolute left-1/2 top-0 h-full w-[2px] bg-red-500"></div> */}
    </div>
    );
}