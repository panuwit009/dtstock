import NotificationButton from "./notificationbtn";
import ProfileButton from "./profilebtn";

export default function HomeHeader () {
    return (
        <header 
            className="@container/HomeHeader sticky top-0 left-0 right-0 z-10 bg-white p-2
            flex items-center justify-between border-b border-b-gray-400"
        >
            <div className="flex flex-col pr-4">
                <span className="font-bold text-2xl 2xl:text-4xl">Home</span>
                <span className="text-lg text-gray-700 font-thin">การจัดการสินค้า</span>
            </div>

            <div className="">
                <div className="flex gap-6">
                    <div className="flex items-center justify-center gap-4">
                        <div className="rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
                                {/* <rect width="100" height="100" fill="#f5f5f5" rx="15"/> */}
                                <path d="M 30 35 L 70 35 L 50 60 Z" fill="#e74c3c"/>
                            </svg>
                        </div>

                        <div className="flex flex-col hidden @xl/HomeHeader:block">
                            <span className="text-sm hidden @3xl/HomeHeader:block">รายการสินค้าที่ถูกใช้วันนี้</span>
                            <span className="font-bold text-xl">79 ชิ้น </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <div className="rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
                                {/* <rect width="100" height="100" fill="#f5f5f5" rx="15"/> */}
                                <path d="M 50 35 L 70 60 L 30 60 Z" fill="#27ae60"/>
                            </svg>      
                        </div>

                        <div className="flex flex-col hidden @xl/HomeHeader:block">
                            <span className="text-sm hidden @3xl/HomeHeader:block">รายการสินค้าที่เพิ่มวันนี้</span>
                            <span className="font-bold text-xl">79 ชิ้น </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4">
                            <NotificationButton />
                            <ProfileButton />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}