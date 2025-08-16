"use client";
import { useAlert } from "@/app/utils/alertcontext";

export default function testAlert () {
    const { al } = useAlert();
    function alertfire () {
        al({
            type: 'success',
            headerMessage: 'สอบทด',
            message: '',
            confirmBt: true,
            confirmBtText: 'ตกลง'
        });
    }

    return (
    <>
    <div className="h-screen flex items-center justify-center">
        <button onClick={alertfire} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Test Alert
        </button>
    </div>
    </>
    )
}