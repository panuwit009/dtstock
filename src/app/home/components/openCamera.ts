import { BrowserMultiFormatReader } from '@zxing/browser';

export function openCamera ({setError}: {setError: React.Dispatch<React.SetStateAction<string | null>>;}) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setError("เบราว์เซอร์ของคุณไม่รองรับการเข้าถึงกล้อง");
        return;
    }
    const codeReader = new BrowserMultiFormatReader ();
    console.log(codeReader);
    //alert("เปิดกล้อง");
    
    codeReader.decodeOnceFromVideoDevice(undefined, 'video').then((result) => {
        console.log(result);
        const qrText = result.getText();
        alert("text: " + qrText);
        // ทำสิ่งที่ต้องการหลังจากสแกน QR code เสร็จ
    }).catch((error) => {
        setError(error.message);
    });
}