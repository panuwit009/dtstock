"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Circle, logoutSuccess, logoutIcon } from "@/components";
import { useShow, useCheckScreen } from "@/utils";
import { menu } from "./menu";
import dtstockIcon from "./img/dtstockIcon.png";
import popSiam from "../../../public/img/logo.jpg";
import "./sidebar.css";

// const iconClass2 = "shrink-0 w-5 h-5 text-blue-500 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white";
const circleClass = "shrink-0 w-4 h-4 text-transparent";
const circleActive = "shrink-0 w-4 h-4 text-blue-500";
const sidebarListClass = "flex items-center p-2 text-black rounded-lg hover:bg-white group hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)]";
const sidebarListActive = "cursor-default shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)] flex items-center p-2 text-black rounded-lg bg-white group";

export default function TestSidebar (
    { sidebarOpen, setSidebarOpen, setLoading, loading }: 
    { sidebarOpen: boolean; setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>; setLoading: React.Dispatch<React.SetStateAction<boolean>>; loading: boolean;}) {
    // const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
    const { setShow } = useShow();
    const router = useRouter();
    const pathname = usePathname();
    const [activePath, setActiveClass] = useState(pathname);
    const { isTablet } = useCheckScreen();

    useEffect(() => {
        setSidebarOpen(!isTablet);
    }, [isTablet]);

    const handleClick = (path: string) => {
        if (pathname === path) return;
        setActiveClass(path);
        setLoading(true);
        router.push(path);
    };

    function logout (): void {
        setShow(logoutSuccess);
        router.push('/');
    }
    return (   
        <aside
            className={`fixed top-0 left-0 z-9 w-64 h-dvh
                transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-[95%]"}`}
        >
            <div className="flex flex-col h-full bg-blue-100">
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
                        <div className="relative w-22 h-22 rounded-full overflow-hidden p-4 bg-white">
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
                <nav className="flex-1 px-3 py-4 scroll-area">
                    <ul className="space-y-2 font-medium">
                        {menu.map((item) => {
                            const isActive = activePath === item.path;
                            return (
                            <SidebarList
                                key={item.path}
                                href={item.path}
                                onClick={() => handleClick(item.path)}
                                loading={loading}
                                className={`${
                                isActive
                                    ? sidebarListActive
                                    : sidebarListClass
                                }`}
                            >
                                <Circle className={isActive ? circleActive : circleClass} />
                                <span className="flex-1 ms-3 whitespace-nowrap">{item.name}</span>
                            </SidebarList>
                            );
                        })}
                    </ul>
                </nav>
                <hr className="text-blue-300 w-56 border-1 self-center" />
                <footer
                    className="p-4
                    text-center text-sm text-gray-700 
                    cursor-pointer flex flex-row items-center justify-center gap-2
                    hover:text-blue-600
                    group"
                    onClick={logout}
                >
                    <div
                        className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full
                        group-hover:bg-red-300 transition-colors duration-200"
                    >
                        {logoutIcon}
                    </div>   
                    <span>ออกจากระบบ</span>
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
    );
}

type SidebarListProps = {
  href: string;
  children?: React.ReactNode;
  className?: string;
  onClick: () => void;
  loading: boolean;
};

function SidebarList({ href, children, className, onClick, loading }: SidebarListProps) {
  return (
    <li onClick={loading ? undefined : onClick}
      className={loading ? "pointer-events-none opacity-50" : ""}
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </li>
  );
}