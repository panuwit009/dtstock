import type { CameraResult } from "@/app/type";

export default function CameraUiResultButton ({cameraResult}: {cameraResult: CameraResult}) {
    return (
        <button onClick={()=>console.log(cameraResult)}
        className="absolute bottom-3 right-3 mr-3 px-3 py-1
        bg-lime-600 text-white rounded-full shadow hover:bg-red-700">
            {cameraResult.length}
        </button>
    );
}