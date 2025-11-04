"use client";
import { useRouter } from "next/navigation";
import { Circle, logoutSuccess } from "@/components";
import "./sidebar.css";
import { useShow } from "@/utils";


// const iconClass2 = "shrink-0 w-5 h-5 text-blue-500 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white";
const circleClass = "shrink-0 w-4 h-4 text-transparent group-hover:text-blue-500";
const sidebarListClass = "flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-white dark:hover:bg-blue-700 group";

export default function Sidebar (
    { sidebarOpen, setSidebarOpen }:
    { sidebarOpen: boolean; setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>; }
) {
    const { setShow } = useShow();
    const router = useRouter();
    function logout (): void {
        setShow(logoutSuccess);
        router.push('/');
    }
    return (
        <>       
            {/* <button
                type="button"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-blue-500 rounded-lg sm:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button> */}

            <aside id="default-sidebar"
                className={`fixed top-0 left-0 z-9 w-64 h-dvh
                    transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-[95%]"}`}
            >
                <div className="flex flex-col h-full bg-blue-100 dark:bg-blue-800">
                    <div className="flex-1 px-3 py-4 scroll-area">
                        <ul className="space-y-2 font-medium">
                            <SidebarList>
                                <Circle className={circleClass} />
                                <span className="ms-3">Dashboard</span>
                            </SidebarList>

                            <SidebarList>
                                <Circle className={circleClass} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                                {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-300">Pro</span> */}
                            </SidebarList>

                            <SidebarList>
                                <Circle className={circleClass} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
                            </SidebarList>

                            <SidebarList>
                                <Circle className={circleClass} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                            </SidebarList>

                            <SidebarList>
                                <Circle className={circleClass} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </SidebarList>

                            <SidebarList>
                                <Circle className={circleClass} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                            </SidebarList>

                            <SidebarList>
                                <Circle className={circleClass} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                            </SidebarList>
                        </ul>
                    </div>

                    <footer
                        className="p-6 border-t border-blue-300 dark:border-blue-700
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
        </>
    );
}

function SidebarList ( { children }: { children: React.ReactNode;}) {
    return (
        <li> 
            <a href="#" className={sidebarListClass}>
                { children }
            </a>
        </li>
    );
}