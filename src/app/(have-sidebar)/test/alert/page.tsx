"use client";
import { example } from "@/components/alert";
import { useShow } from "@/utils";

export default function TestAlert () {
    const { setShow } = useShow();

    return (
        <div className="h-full w-full flex items-center justify-center">
            <button onClick={() => setShow(example)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Test Show
            </button>
        </div>
    )
}