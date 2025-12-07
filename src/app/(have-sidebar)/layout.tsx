"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sidebar, SillyLoading, ResponsiveSwitch } from "@/components";
import { useUiState } from "@/state";

export default function Layout ({ children }: { children: React.ReactNode; }) {
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
                <TabletView loading={loading} setLoading={setLoading}>
                    {children}
                </TabletView>
            }
        />
    );
}

function TabletView ({ children, loading, setLoading }: { children: React.ReactNode; loading: boolean; setLoading: React.Dispatch<React.SetStateAction<boolean>>;}) {
    const sidebarOpen = useUiState((s) => (s.sidebarOpen));
    return (
        <div className="flex w-dvw h-dvh">
            <Sidebar setLoading={setLoading} loading={loading} />
            <main 
                className={`flex-1 relative overflow-y-auto
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
        <div 
            className={`flex flex-col w-dvw h-dvh bg-yellow-100`}
        >
            <main className="flex-1 overflow-auto">
                { children }
            </main>
            <nav
                className="h-20 flex shrink-0 justify-center items-center bg-green-100 rounded-t-4xl"
            >
                asd
            </nav>
        </div>
    );
}