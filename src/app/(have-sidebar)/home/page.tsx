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
            <hr className="text-blue-100 my-1 border-1 rounded-lg" />
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
        </>
    );
}

function TabletView () {
    return (
        <div className="px-4">
            <HomeHeader />
            {/* <hr className="flex self-center"/> */}
            <div className="relative mt-4">
                <HomeUserGuide />
                <ItemList />
            </div>
        </div>
    );
}