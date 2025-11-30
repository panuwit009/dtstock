"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sidebar, SillyLoading, ResponsiveSwitch } from "@/components";
export default function Layout ({ children }: { children: React.ReactNode; }) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);
    const pathname = usePathname();
    useEffect(() => {
        setLoading(false);
    }, [pathname]);

    return (
        <ResponsiveSwitch 
            mobile={
                <MobileView>
                    {children}
                </MobileView>
            }
            tablet={
                <TabletView
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    loading={loading}
                    setLoading={setLoading}
                >
                    {children}
                </TabletView>
            }
        />
    );
}

function TabletView ({ children, sidebarOpen, setSidebarOpen, loading, setLoading }: { children: React.ReactNode; sidebarOpen: boolean; setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>; loading: boolean; setLoading: React.Dispatch<React.SetStateAction<boolean>>;}) {
    return (
        <div className="flex w-dvw h-dvh">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setLoading={setLoading} loading={loading}/>
            <main 
                className={`flex-1 relative overflow-y-auto px-4
                ml-3 ${sidebarOpen && "md:ml-64"}
                transition-all duration-300 `}
            >
                { loading ? <SillyLoading /> : children }
            </main>
        </div>
    );
}

function MobileView ({ children }: { children: React.ReactNode; }) {
    return (
        <main 
            className={`flex flex-col w-dvw max-h-dvh bg-yellow-100`}
        >
            { children }
        </main>
    );
}