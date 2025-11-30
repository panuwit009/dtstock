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
            <div className="bg-blue-200 flex-1 scroll-area">
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">asdasd</p>
                <p className="text-4xl">ฟหกฟหก</p>
            </div>
            <nav
                className="h-20
                flex shrink-0 justify-center items-center bg-green-100"
            >
                asd
            </nav>
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