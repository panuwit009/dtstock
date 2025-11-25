import { ResponsiveSwitch, HomeHeader, HomeUserGuide, ItemList } from "@/components";

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
                <HomeUserGuide />
                <ItemList />
            </div>
        </>
    );
}