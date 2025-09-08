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
        background: "#fff",
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

export const LoadingAnimation = () => {
  return (
    <Player
    autoplay
    loop
    speed={1.5}
    src={animationData}
    style={{ height: "150px", width: "150px" }}
    />
  );
}
