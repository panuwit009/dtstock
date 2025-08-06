"use client";
import { setIslogin } from "../type";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Dashboard ({setIslogin}: setIslogin) {
    return (
        <>
        <FontAwesomeIcon icon={faCoffee} /> <FontAwesomeIcon icon={faCheckSquare} />
        <div>show dashboard</div>
        <button onClick={() => {alert("ออกจากระบบสำเร็จ"); setIslogin(false);}}>Logout</button>
        </>
    );
}