"use client";
import { useCheckScreen } from "@/utils";

interface Props {
  mobile?: React.ReactNode;
  tablet?: React.ReactNode;
  desktop?: React.ReactNode;
}

export function ResponsiveSwitch({ mobile, tablet, desktop }: Props) {
  const { isTablet, isDesktop } = useCheckScreen();
  
  if (isTablet && tablet) {
    return <>{tablet}</>;
  } else if (isDesktop && desktop) {
    return <>{desktop}</>;
  }
  
  return <>{mobile}</>;
}