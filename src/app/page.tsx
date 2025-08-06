"use client";
import { useState } from "react";
import "@fontsource/kanit"; // Defaults to weight 400
import "@fontsource/kanit/400.css"; // Specify weight
import "@fontsource/kanit/400-italic.css"; // Specify weight and style

import Login from "./components/login";
import Dashboard from "./components/dashboard";

export default function Main() {
  const [isLogin, setIslogin] = useState<boolean>(false);

  if (isLogin) {
    return <Dashboard setIslogin={setIslogin}/>;
  } else {
    return <Login setIslogin={setIslogin}/>;
  }
}
