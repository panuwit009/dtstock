"use client";
import { useMediaQuery } from "react-responsive";

export function useCheckScreen() {
  // ตาม device
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 640px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  // breakpoints ของ Tailwind
  const isSm = useMediaQuery({ query: "(min-width: 640px)" });
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });
  const is2Xl = useMediaQuery({ query: "(min-width: 1536px)" });

  return { isMobile, isTablet, isDesktop, isSm, isMd, isLg, isXl, is2Xl };
}
