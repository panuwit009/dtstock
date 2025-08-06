"use client";
import { useRouter } from "next/navigation";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Dashboard () {
    const router = useRouter();
    return (
        <>
        <FontAwesomeIcon icon={faCoffee} /> <FontAwesomeIcon icon={faCheckSquare} />
        <div>show dashboard</div>
        <button onClick={() => {alert("ออกจากระบบสำเร็จ"); router.push('/'); }}>Logout</button>
        </>
    );
}