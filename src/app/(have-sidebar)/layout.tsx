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
        <>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setLoading={setLoading} loading={loading}/>
        { loading
        ? <SillyLoading />
        : children
        }
        </>
    );
}