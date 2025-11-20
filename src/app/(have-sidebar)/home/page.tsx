import { ItemList, HomeHeader, ResponsiveSwitch } from "@/components";

export default function Home () {
    return (
        <ResponsiveSwitch 
            mobile={<MobileView />}
            tablet={<TabletView />}
        />
    );
}

function MobileView () {
    return (
        <>
            หน้าจอมือถือ
        </>
    );
}

function TabletView () {
    return (
        <>
            <HomeHeader />
            {/* <hr className="flex self-center"/> */}
            <div className="relative mt-4">
                <div className="bg-green-100 rounded-xl min-h-20 flex justify-center items-center">
                    สแกนบาร์โค๊ดดิ: ปุ่ม1 ปุ่ม2
                </div>
                <ItemList />
            </div>
        </>
    );
}