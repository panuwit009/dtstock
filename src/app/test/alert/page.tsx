"use client";
import { useShow } from "@/app/utils/showcontext";
import { 
    AlertPTB,
    AlertPTBIcon,
    AlertPTBMessageSection, AlertPTBHeaderMessage, AlertPTBMessage,
    AlertPTBConfirmButton
} from "@/app/utils/alert";

export default function TestAlert () {
    const { setShow } = useShow();

    return (
    <>
    <div className="h-screen flex items-center justify-center">
        <button onClick={() =>
            setShow 
            (
            <AlertPTB>
                <AlertPTBIcon className = "bg-gradient-to-br from-emerald-400 to-green-400">
                    ✔
                </AlertPTBIcon>
                <AlertPTBMessageSection>
                    <AlertPTBHeaderMessage>ข้อความอะไรสักอย่าง</AlertPTBHeaderMessage>
                    <AlertPTBMessage>ข้อความอะไรสักอย่างเหมือนกัน</AlertPTBMessage>
                </AlertPTBMessageSection>
                <AlertPTBConfirmButton className = "bg-gradient-to-br from-emerald-400 to-green-500">
                    ตกลง
                </AlertPTBConfirmButton>
            </AlertPTB>
            )
        }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Test Show
        </button>
    </div>
    </>
    )
}