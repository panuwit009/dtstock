"use client";
import { Sidebar } from "@/components";
import { useUiState } from "@/state"

export default function LayoutTablet ({ children }: { children: React.ReactNode; }) {
    const sidebarOpen = useUiState((s) => (s.sidebarOpen));
    return (
        <div className="flex w-dvw h-dvh">
            <Sidebar />
            <main 
                className={`flex-1 relative overflow-y-auto
                ml-3 ${sidebarOpen && "md:ml-64"}
                transition-all duration-300 `}
            >
                { children }
            </main>
        </div>
    );
}