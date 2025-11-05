"use client";
import { useState, useEffect } from "react";

export default function Tooltip({ message }: { message: string; }) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!pos) {
        setPos({ x: e.clientX, y: e.clientY });
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [pos]);

  if (!pos) return null;

  return (
    <div
      className="fixed bg-black text-white text-sm px-3 py-1 rounded pointer-events-none"
      style={{
        top: pos.y + 10,
        left: pos.x + 10,
      }}
    >
      {message}
    </div>
  );
}
