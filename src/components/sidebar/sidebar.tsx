"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Circle, logoutSuccess } from "@/components";
import "./sidebar.css";
import { useShow } from "@/utils";

// const iconClass2 = "shrink-0 w-5 h-5 text-blue-500 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white";
const circleClass = "shrink-0 w-4 h-4 text-transparent";
const circleActive = "shrink-0 w-4 h-4 text-blue-500";
const sidebarListClass = "flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-white dark:hover:bg-blue-700 group";
const sidebarListActive = "flex items-center p-2 text-black rounded-lg dark:text-white bg-white dark:bg-blue-700 group";

export default function Sidebar (
    { sidebarOpen, setSidebarOpen, Page }:
    { sidebarOpen: boolean; setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>; Page: string; }
) {
    const [currentPage, setCurrentPage] = useState<string | null>(Page);
    const { setShow } = useShow();
    const router = useRouter();
    function logout (): void {
        setShow(logoutSuccess);
        router.push('/');
    }
    return (   
        <aside
            className={`fixed top-0 left-0 z-9 w-64 h-dvh
                transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-[95%]"}`}
        >
            <div className="flex flex-col h-full bg-yellow-100 dark:bg-yellow-800">
                <header className="flex shrink-0 bg-red-100 justify-center items-center h-40">
                    Sidebar Header
                </header>
                <nav className="flex-1 px-3 py-4 scroll-area bg-green-100">
                    <ul className="space-y-2 font-medium">
                        <SidebarList className={currentPage === "Home" ? sidebarListActive : sidebarListClass } 
                            onClick={()=> setCurrentPage("Home")}
                        >
                            <Circle className={currentPage === "Home" ? circleActive : circleClass} />
                            <span className="ms-3">Home</span>
                        </SidebarList>

                        <SidebarList className={currentPage === "Dashboard" ? sidebarListActive : sidebarListClass } 
                            onClick={()=> setCurrentPage("Dashboard")}
                        >
                            <Circle className={currentPage === "Dashboard" ? circleActive : circleClass} />
                            <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                        </SidebarList>

                        <SidebarList className={currentPage === "หน้าอะไรสักอย่าง" ? sidebarListActive : sidebarListClass } 
                            onClick={()=> setCurrentPage("หน้าอะไรสักอย่าง")}
                        >
                            <Circle className={currentPage === "หน้าอะไรสักอย่าง" ? circleActive : circleClass} />
                            <span className="flex-1 ms-3 whitespace-nowrap">หน้าอะไรสักอย่าง</span>
                        </SidebarList>

                        <SidebarList className={currentPage === "หน้าอะไรสักอย่าง2" ? sidebarListActive : sidebarListClass } 
                            onClick={()=> setCurrentPage("หน้าอะไรสักอย่าง2")}
                        >
                            <Circle className={currentPage === "หน้าอะไรสักอย่าง2" ? circleActive : circleClass} />
                            <span className="flex-1 ms-3 whitespace-nowrap">หน้าอะไรสักอย่าง2</span>
                        </SidebarList>
                    </ul>
                </nav>
                <footer
                    className="p-4 border-t border-blue-300 dark:border-blue-700
                    text-center text-sm text-gray-700 dark:text-gray-300 
                    cursor-pointer"
                    onClick={logout}
                >
                    ออกจากระบบ
                </footer>
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="group absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2
                    bg-white text-black rounded-full w-4 h-16 shadow-md 
                    flex items-center justify-center transition
                    hover:bg-blue-300 hover:text-white hover:cursor-pointer"
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
    );
}

function SidebarList ( { children, className, onClick }: { children: React.ReactNode; className?: string; onClick: () => void;}) {
    return (
        <li onClick={onClick}> 
            <a href="#" className={className}>
                { children }
            </a>
        </li>
    );
}