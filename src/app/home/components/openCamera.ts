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

// เพิ่ม interface ขยาย type ให้ TS รู้ว่ามีฟังก์ชัน lock()
interface ScreenOrientationWithLock extends ScreenOrientation {
  lock(orientation: OrientationType | "landscape" | "portrait"): Promise<void>;
}

export async function openCamera(
  { setCameraResult }: {
    setCameraResult: React.Dispatch<React.SetStateAction<CameraResult>>;
  }
) {
  // 🧭 ขอหมุนจอเป็นแนวนอน
  const orientation = screen.orientation as ScreenOrientationWithLock;
  if (orientation && typeof orientation.lock === "function") {
    try {
      await orientation.lock("landscape");
      console.log("✅ Locked to landscape");
    } catch (err) {
      console.warn("Lock orientation ไม่สำเร็จ:", err);
    }
  }

  const codeReader = new BrowserMultiFormatReader();

  codeReader.decodeOnceFromVideoDevice(undefined, "video")
    .then((result) => {
      const qrText = result.getText();
      const testVar = { barcode: qrText };
      closeCamera();
      setCameraResult((p) => [...p, testVar]);
    })
    .catch((error) => {
      alert(error.message);
    });
}
