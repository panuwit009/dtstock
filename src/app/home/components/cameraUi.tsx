import { openCamera, closeCamera } from "./openCamera";
import CameraUiResultButton from "./cameraUIresult";
import type { CameraResult } from "@/app/type";

export default function CameraUi (
    { setOpenCamera, cameraResult, setCameraResult }:
    { setOpenCamera: React.Dispatch<React.SetStateAction<boolean>>;
      cameraResult: CameraResult;
      setCameraResult: React.Dispatch<React.SetStateAction<CameraResult>>;
    }
) {
    const stopCamera = (): void => {
        setOpenCamera(false);
        closeCamera();
    }
    return (
    <>

        {/* id ของ video ต้องเท่ากับ video เพราะในฟังก์ชันเปิดกล้องน่าจะ getelementbyid*/}
        <video
            id="video"
            autoPlay
            muted
            playsInline
            className="
            absolute inset-0
            object-cover
            w-full h-full
            [@media(orientation:portrait)]:rotate-90
            [@media(orientation:portrait)]:w-screen
            [@media(orientation:portrait)]:h-screen
            "
        />
        
        {/* เส้นแนวนอน */}
        <div onClick={()=>openCamera({setCameraResult})}
        className="absolute top-1/2 left-0 w-full h-[2px] bg-red-500"/>

        <button onClick={stopCamera}
        className="absolute top-3 right-3 mr-3 px-3 py-1
        bg-red-600 text-white rounded-full shadow hover:bg-red-700">
            ปิด
        </button>
        
        <CameraUiResultButton cameraResult={cameraResult}/>
        <div>
            <pre>{JSON.stringify(cameraResult, null, 2)}</pre>
        </div>

        
        {/* เส้นแนวตั้ง */}
        {/* <div className="absolute left-1/2 top-0 h-full w-[2px] bg-red-500"></div> */}
    </>
    );
}