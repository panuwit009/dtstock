import { BrowserMultiFormatReader } from '@zxing/browser';
import type { CameraResult } from '@/app/type';

const codeReader = new BrowserMultiFormatReader();

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

export async function openCamera (
    { setCameraResult }:
    { 
    setCameraResult: React.Dispatch<React.SetStateAction<CameraResult>>; }
    ) {
    // if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    //     setError("เบราว์เซอร์ของคุณไม่รองรับการเข้าถึงกล้อง");
    //     return;
    // }
    try {
    // 🔹 ขอสิทธิ์เปิดกล้องหลัง + อัตราส่วนแนวนอน
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1280 },
        height: { ideal: 720 },
        aspectRatio: { ideal: 16 / 9 },
      },
    });

    const videoElement = document.getElementById("video") as HTMLVideoElement;
    if (!videoElement) throw new Error("ไม่พบ video element");

    // 🔹 ผูก stream กับ video element
    videoElement.srcObject = stream;
    // await videoElement.play();

    // 🔹 พยายามล็อกจอแนวนอน (บางเบราว์เซอร์อาจไม่อนุญาต)
    const orientation = (screen.orientation as any);
    if (orientation?.lock) {
        try {
            await orientation.lock("landscape");
        } catch (err) {
            console.warn("Lock orientation ไม่สำเร็จ:", err);
        }
    }


    // 🔹 ให้ zxing อ่านจาก video element โดยตรง
    const result = await codeReader.decodeOnceFromVideoElement(videoElement);
    const qrText = result.getText();

    // 🔹 เก็บผลลัพธ์
    setCameraResult((prev) => [...prev, { barcode: qrText }]);

    // 🔹 ปิดกล้องเมื่ออ่านเสร็จ
    closeCamera();
  } catch (error: any) {
    console.error(error);
    alert(error.message || "เปิดกล้องไม่สำเร็จ");
  }
}
