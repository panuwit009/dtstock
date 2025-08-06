"use client";
import { useRouter } from "next/navigation";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserQRCodeReader } from '@zxing/browser';

export default function Dashboard () {
    function scanBarcode () {
        const codeReader = new BrowserQRCodeReader();
        console.log(codeReader);
        //alert("เปิดกล้อง");
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
        </>
    );
}