"use client";
import dynamic from "next/dynamic";
import React from "react";
import animationData from "../../../public/lottie/Loading-DTstock.json";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export const FullScreenLoading = () => {
  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "#fff",
        zIndex: 9999
      }}
    >
      <Player
        autoplay
        loop
        speed={1.5}
        src={animationData}
        style={{ height: "50%", width: "50%" }}
      />
    </div>
  );
};

export const LoadingAnimation = ({ 
  children,
  className = ""
}: { 
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Player
        autoplay
        loop
        speed={1.5}
        src={animationData}
        className={className}
      />
      {children}
    </div>
  );
}
