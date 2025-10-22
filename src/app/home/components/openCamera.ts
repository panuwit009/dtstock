import { BrowserMultiFormatReader } from '@zxing/browser';
import type { CameraResult } from '@/app/type';

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
    { setCameraResult }:
    { 
    setCameraResult: React.Dispatch<React.SetStateAction<CameraResult>>; }
    ) {
    // if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    //     setError("เบราว์เซอร์ของคุณไม่รองรับการเข้าถึงกล้อง");
    //     return;
    // }
    const codeReader = new BrowserMultiFormatReader ();
    // console.log(codeReader);
    //alert("เปิดกล้อง");
    
    codeReader.decodeOnceFromVideoDevice(undefined, 'video').then((result) => {
        // console.log(result);
        const qrText = result.getText();
        const testVar = { barcode: qrText };
        closeCamera();
        setCameraResult(p => [...p, testVar]);
        // setOpenCamera(false);
        // alert("text: " + qrText);
        
    }).catch((error) => {
        alert(error.message);
    });
}