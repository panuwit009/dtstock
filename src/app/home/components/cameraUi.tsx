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
    <div className="relative w-screen h-screen overflow-hidden
                portrait:rotate-90 portrait:origin-center portrait:w-[100vh] portrait:h-[100vw]">
  <video 
    id="video"
    autoPlay 
    muted 
    playsInline
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
/>
        {/* เส้นแนวนอน */}
        <div onClick={()=>openCamera({setCameraResult})}
        className="absolute top-1/2 left-0 w-full h-[2px] bg-red-500" />
        <button onClick={stopCamera}
        className="absolute top-3 right-3 mr-3 px-3 py-1
        bg-red-600 text-white rounded-full shadow hover:bg-red-700">
            ปิด
        </button>
        
        <CameraUiResultButton cameraResult={cameraResult}/>
        <div> {/* ทดสอบ เอาผลลัพธ์มาแสดงให้ดู */}
            <pre>{JSON.stringify(cameraResult, null, 2)}</pre>
        </div>

        
        {/* เส้นแนวตั้ง */}
        {/* <div className="absolute left-1/2 top-0 h-full w-[2px] bg-red-500"></div> */}
    </div>
    );
}