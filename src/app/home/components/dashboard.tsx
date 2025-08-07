"use client";
import { useRouter } from "next/navigation";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { useState } from "react";

export default function Dashboard () {
    const [error, setError] = useState<string | null>(null);

    function scanBarcode () {
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
    const router = useRouter();
    return (
        <>
        <FontAwesomeIcon icon={faCoffee} /> <FontAwesomeIcon icon={faCheckSquare} />
        <div>show dashboard</div>
        <div className="hover:cursor-pointer" onClick={scanBarcode}>Scan Barcode</div>
        <button className="hover:cursor-pointer"
        onClick={() => {
            alert("ออกจากระบบสำเร็จ"); router.push('/'); }
            }
        >Logout</button>
        {error && <p className="text-red-500 hover:cursor-pointer" onClick={() => setError("")}>{error}</p>}
        <video id="video" style={{ width: "100%" }}></video>
        </>
    );
}