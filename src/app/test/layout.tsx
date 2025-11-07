"use client";
import { useState } from "react";
import { Sidebar } from "@/components";
export default function Layout ({ children }: { children: React.ReactNode; }) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
    return (
        <>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        {children}
        </>
    );
}