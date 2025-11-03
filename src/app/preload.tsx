"use client";
import { useEffect, useState } from "react";
import { FullScreenLoading } from "./components";
// ---------------- assets --------------------
import { loadIcons } from "./preload/loadIcons";
// ---------------- assets --------------------

export default function Preload ({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const preloading = async () => {
        try {
            await loadIcons();
            await new Promise((res) => setTimeout(res, 300));
            // หน่วงนิดเพื่อให้แน่ใจว่า font/css โหลดครบ
        } catch (error) {
            console.error(error);
        } finally {
            setReady(true);
        }
    }
    preloading();    
  }, []);

  if (!ready) return <FullScreenLoading />

  return <>{children}</>;
}