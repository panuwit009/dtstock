"use client";
import { useEffect, useState } from "react";
import { FullScreenLoading } from "./utils/loading";
// ---------------- assets --------------------
import { loadIcons } from "./preload/loadIcons";
// ---------------- assets --------------------

export default function Preload ({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const preloading = async () => {
        try {
            await loadIcons();
            await new Promise((res) => setTimeout(res, 3000));
            // หน่วงนิดเพื่อให้แน่ใจว่า font/css โหลดครบ จริงๆหน่วงแค่ 300 ms ก็พออันนี้แค่เทส
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