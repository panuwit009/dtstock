"use client";
import { useState, useEffect } from "react";

export default function Tooltip({ message }: { message: string }) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 500);

    const handleMove = (e: MouseEvent) => {
      if (!pos) setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [pos]);

  if (!ready || !pos) return null;

  return (
    <div
      className="fixed bg-black text-white text-sm px-3 py-1 rounded pointer-events-none z-50"
      style={{
        top: pos.y + 10,
        left: pos.x + 10,
      }}
    >
      {message}
    </div>
  );
}
