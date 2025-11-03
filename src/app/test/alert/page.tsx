"use client";
import { useRouter } from "next/navigation";
import { example } from "@/components";
import { useShow } from "@/utils";

export default function TestAlert () {
    const { setShow } = useShow();
    const router = useRouter();

    return (
    <>
    <div className="h-screen flex items-center justify-center gap-4">
        <button onClick={() => router.push("/home")}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Home
        </button>

        <button onClick={() => setShow(example)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Test Show
        </button>
    </div>
    </>
    )
}