import { BrowserMultiFormatReader } from '@zxing/browser';

export function closeCamera (): void {
    const videoElement = document.getElementById('video') as HTMLVideoElement;
    if (videoElement) {
        const stream = videoElement.srcObject as MediaStream;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop()); videoElement.srcObject = null; // หยุดการทำงานของทุกๆ track (เช่น กล้อง)
        }
    }
}

export function openCamera (
    { setError, setOpenCamera }:
    { setError: React.Dispatch<React.SetStateAction<string | null>>;
    setOpenCamera: React.Dispatch<React.SetStateAction<boolean>>; }
    ) {
    // if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    //     setError("เบราว์เซอร์ของคุณไม่รองรับการเข้าถึงกล้อง");
    //     return;
    // }
    const codeReader = new BrowserMultiFormatReader ();
    // console.log(codeReader);
    //alert("เปิดกล้อง");
    
    codeReader.decodeOnceFromVideoDevice(undefined, 'video').then((result) => {
        console.log(result);
        closeCamera();
        // setOpenCamera(false);
        // const qrText = result.getText();
        // alert("text: " + qrText);
        
    }).catch((error) => {
        setError(error.message);
    });
}