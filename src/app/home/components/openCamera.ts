import { BrowserMultiFormatReader } from '@zxing/browser';

export async function openCamera (): Promise<{ barcode?: string; error?: string }> {
    // if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    //     setError("เบราว์เซอร์ของคุณไม่รองรับการเข้าถึงกล้อง");
    //     return;
    // }
    const codeReader = new BrowserMultiFormatReader ();
    
    return await codeReader.decodeOnceFromVideoDevice(undefined, 'video').then((result) => (
        { barcode: result.getText() })
    ).catch((error) => {
        return { error: error.message };
    });
}

export function closeCamera (): void {
    const videoElement = document.getElementById('video') as HTMLVideoElement;
    if (videoElement) {
        const stream = videoElement.srcObject as MediaStream;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());videoElement.srcObject = null; // หยุดการทำงานของทุกๆ track (เช่น กล้อง)
        }
    }
}