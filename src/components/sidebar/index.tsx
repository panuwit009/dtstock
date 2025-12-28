"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Circle, logoutIcon } from "../svg";
import { SidebarOverlayDissmiss } from "../overlay";
import { useCheckScreen } from "@/utils";
import { useUiState } from "@/state";
import { menu, type Menu } from "./menu";
import dtstockIcon from "./img/dtstockIcon.png";
import popSiam from "../../../public/img/logo.jpg";

// const iconClass2 = "shrink-0 w-5 h-5 text-blue-500 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white";
const circleClass = "shrink-0 w-4 h-4 text-transparent";
const circleActive = "shrink-0 w-4 h-4 text-blue-500";
const sidebarListClass = "flex items-center p-2 text-black rounded-lg hover:bg-white group hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)] active:scale-96";
const sidebarListActive = "cursor-default shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)] flex items-center p-2 text-black rounded-lg bg-white group active:scale-96";

export function Sidebar () {
    const sidebarOpen = useUiState((s) => (s.sidebarOpen));
    const setSidebarOpen = useUiState((s) => (s.setSidebarOpen));
    const router = useRouter();
    const pathname = usePathname();
    
    const { isMd } = useCheckScreen();
    useEffect(() => {
        setSidebarOpen(isMd);
    }, [isMd])

    function logout (): void {
        router.push('/');
    }
    return (
        <>
        { sidebarOpen && <SidebarOverlayDissmiss />}
        <aside
            className={`fixed top-0 left-0 bottom-0 z-30 w-64 
                transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-[95%]"}`}
        >
            <div className="flex flex-col h-full bg-blue-100 scroll-area">
                <header className="flex flex-col shrink-0 justify-center items-start">
                    <div className="w-full flex flex-row justify-center mt-6">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden">
                            <Image
                                src={dtstockIcon}
                                alt="logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="ml-4 self-center text-blue-600 font-semibold text-lg">DT|</p>
                        <span className="self-center text-gray-800 text-lg font-medium tracking-wide">STOCK</span>
                    </div>

                    <div className="w-full flex flex-col items-center mt-4">
                        <div className="relative w-22 h-22 rounded-full overflow-hidden p-4 bg-white shadow-lg/30">
                            <Image
                                src={popSiam}
                                alt="profile picture"
                                fill
                                className="object-cover scale-90 rounded-full"
                            />
                        </div>
                        <h1 className="font-bold mt-2">ป็อป สยาม</h1>
                        <h1 className="mt-2 mb-4">หนุ่มหล่อที่สุดของไทย</h1>
                    </div>
                    
                </header>
                <nav className="flex-1 px-3 py-4">
                    <ul className="space-y-2 font-medium">
                        {menu.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                            <SidebarList key={item.path} item={item} isActive={isActive} >
                                <Circle className={isActive ? circleActive : circleClass} />
                                <span className="flex-1 ms-3 whitespace-nowrap">{item.name}</span>
                            </SidebarList>
                            );
                        })}
                    </ul>
                </nav>
                <hr className="text-blue-300 w-56 border-1 self-center" />
                <footer
                    className="p-2
                    text-center text-sm text-gray-700 
                    cursor-pointer flex items-center justify-center
                    hover:text-blue-600
                    group"
                    onClick={logout}
                >
                    <Link href="/" className="flex items-center justify-center gap-2">
                        <div
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-red-400"
                        >
                            {logoutIcon}
                        </div>   
                        <span>ออกจากระบบ</span>
                    </Link>
                </footer>
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="group absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2
                    bg-white text-black rounded-full w-4 h-16 shadow-md 
                    flex items-center justify-center transition
                    hover:bg-blue-300 hover:text-white cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <g
                            className={`transition-transform duration-500
                                ${sidebarOpen ? "rotate-0 group-hover:rotate-180" : "rotate-180 group-hover:rotate-0"}`}
                                style={{ transformOrigin: "50% 50%" }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </g>
                    </svg>
                </button>
            </div>
        </aside>
        </>
    );
}

function SidebarList({ children, item, isActive }: { children: React.ReactNode; item: Menu; isActive: boolean;}) {
  return (
    <li className=""
        // title={item.name} tooltip เอาไว้ค่อยว่ากันว่าควรมีมั้ย
    >
      <Link href={item.path} className={`${ isActive ? sidebarListActive : sidebarListClass }`}>
        {children}
      </Link>
    </li>
  );
}