// import { useEffect } from "react";
// import { BrowserMultiFormatReader } from '@zxing/browser';

// export function CameraPreview() {
//   useEffect(() => {
//     const codeReader = new BrowserMultiFormatReader();
//     let mediaStream: MediaStream | null = null;
//     let controls: any = null;

//     (async () => {
//       const devices = await BrowserMultiFormatReader.listVideoInputDevices();
//       const selectedDeviceId = devices[0]?.deviceId;

//       // 1️⃣ สร้าง MediaStream เอง
//       mediaStream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: selectedDeviceId } });

//       const videoEl = document.getElementById('video') as HTMLVideoElement;
//       videoEl.srcObject = mediaStream;

//       // 2️⃣ ให้ ZXing ใช้ video element ของเรา
//       controls = await codeReader.decodeFromVideoDevice(
//         undefined,
//         videoEl,
//         (result, error) => {
//           if (result) console.log("Scanned:", result.getText());
//         }
//       );
//     })();

//     return () => {
//       console.log("Cleaning up camera...");

//       // หยุด ZXing loop
//       if (controls) controls.stop();

//       // ปิด MediaStream จริง
//       if (mediaStream) {
//         mediaStream.getTracks().forEach(track => track.stop());
//       }

//       console.log("Camera fully stopped");
//     };
//   }, []);

//   return <video id="video" className="h-[100dvh] object-cover" />;
// }
