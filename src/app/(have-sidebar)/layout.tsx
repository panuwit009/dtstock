"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sidebar, SillyLoading } from "@/components";
export default function Layout ({ children }: { children: React.ReactNode; }) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);
    const pathname = usePathname();
    useEffect(() => {
        setLoading(false);
    }, [pathname]);

    return (
        <div className="flex w-dvw h-dvh">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setLoading={setLoading} loading={loading}/>
            <main 
                className={`flex-1 flex-1 ${sidebarOpen ? "md:ml-64" : "md:ml-3"}`}
            >
                { loading ? <SillyLoading /> : children }
            </main>
        </div>
    );
}