"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import "@fontsource/kanit"; // Defaults to weight 400
import "@fontsource/kanit/400.css"; // Specify weight
import "@fontsource/kanit/400-italic.css"; // Specify weight and style

import Login from "./components/login";

export default function Main() {
  const [isLogin, setIslogin] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (isLogin) {
      router.push('/home');
    }
  }, [isLogin, router]);

  return <Login setIslogin={setIslogin}/>;
}
