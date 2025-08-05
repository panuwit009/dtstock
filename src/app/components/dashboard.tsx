"use client";
import { setIslogin } from "../type";
export default function Dashboard ({setIslogin}: setIslogin) {
    return (
        <>
        <div>show dashboard</div>
        <button onClick={() => {alert("ออกจากระบบสำเร็จ"); setIslogin(false);}}>Logout</button>
        </>
    );
}