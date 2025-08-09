"use client";

import dynamic from "next/dynamic";
import React from "react";
import animationData from "../../../public/lottie/Loading-DTstock.json";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const LottieLoader = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Player
        autoplay
        loop
        speed={1.5}
        src={animationData}
        style={{ height: "600px", width: "600px" }}
      />
    </div>
  );
};

export default LottieLoader;
