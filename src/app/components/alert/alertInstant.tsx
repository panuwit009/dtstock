import { 
    AlertPTB,
    AlertPTBIcon,
    AlertPTBMessageSection, AlertPTBHeaderMessage, AlertPTBMessage,
    AlertPTBConfirmButton
} from "@/app/components/alert";
import { overlayDismiss } from "../overlay/overlay";

export const example =
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
    </AlertPTB>;

export const logoutSuccess =
    <>
    { overlayDismiss }
    <AlertPTB>
        <AlertPTBIcon className = "bg-gradient-to-br from-emerald-400 to-green-400">
            ✔
        </AlertPTBIcon>
        <AlertPTBMessageSection>
            <AlertPTBHeaderMessage>ออกจากระบบสำเร็จ</AlertPTBHeaderMessage>
        </AlertPTBMessageSection>
    </AlertPTB>
    </>;