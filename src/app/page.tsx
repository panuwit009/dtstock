"use client";
import { useState } from "react";

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
