"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { Login } from "@/components";

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
