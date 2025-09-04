"use client";
import { useShow } from "@/app/utils/showcontext";

export default function TestAlert () {
    const { setShow } = useShow();
    function alertfire () {
        setShow({
            type: 'modal',
            detail: {
                // status: 'success',
                // headerMessage: 'สอบทด',
                // message: '',
                // confirmBt: true,
                // confirmBtText: 'ตกลง'
            }
        });
    }

    return (
    <>
    <div className="h-screen flex items-center justify-center">
        <button onMouseEnter={alertfire} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Test Show
        </button>
    </div>
    </>
    )
}