"use client";
import { useMediaQuery } from "react-responsive";

export function useCheckScreen () {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

  // Tailwind
  const isSm = useMediaQuery({ query: "(min-width: 640px)" });
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });
  const is2Xl = useMediaQuery({ query: "(min-width: 1536px)" });

  let current = "ต่ำกว่า sm";
  if (is2Xl) current = "2xl ขึ้นไป";
  else if (isXl) current = "xl";
  else if (isLg) current = "lg";
  else if (isMd) current = "md";
  else if (isSm) current = "sm";

  return { isMobile, isTablet, isDesktop, isSm, isMd, isLg, isXl, is2Xl, current };
}
