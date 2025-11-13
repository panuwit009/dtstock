"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sidebar, SillyLoading, ResponsiveSwitch } from "@/components";
export default function Layout ({ children }: { children: React.ReactNode; }) {
    return (
        <ResponsiveSwitch 
            mobile={<MobileView children={children}/>}
            tablet={<TabletView children={children}/>}
            desktop={<TabletView children={children}/>}
        />
    );
}

export function TabletView ({ children }: { children: React.ReactNode; }) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);
    const pathname = usePathname();
    useEffect(() => {
        setLoading(false);
    }, [pathname]);
    return (
        <div className="flex w-dvw h-dvh overflow-y-hidden">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setLoading={setLoading} loading={loading}/>
            <main 
                className={`flex-1 ${sidebarOpen ? "sm:ml-64" : "sm:ml-3"}`}
            >
                { loading ? <SillyLoading /> : children }
            </main>
        </div>
    );
}

export function MobileView ({ children }: { children: React.ReactNode; }) {
    return (
        <div className="flex w-dvw h-dvh overflow-y-hidden">
            <main 
                className={`flex-1`}
            >
                { children }
            </main>
        </div>
    );
}