import { 
    AlertPTB,
    AlertPTBIcon,
    AlertPTBMessageSection, AlertPTBHeaderMessage, AlertPTBMessage,
    AlertPTBConfirmButton
} from "./alert";
import { overlayDismiss } from "../overlay";

export const example =
    <AlertPTB className="border-2 border-gray-300">
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
    </AlertPTB>;


export const logoutSuccess =
    <>
    { overlayDismiss }
    <AlertPTB className="border-t-4 border-emerald-400 drop-shadow-lg/20">
        <AlertPTBIcon className = "bg-gradient-to-br from-emerald-400 to-green-400 animate-bounce">
            ✔
        </AlertPTBIcon>
        <AlertPTBMessageSection>
            <AlertPTBHeaderMessage>ออกจากระบบสำเร็จ</AlertPTBHeaderMessage>
        </AlertPTBMessageSection>
    </AlertPTB>
    </>;