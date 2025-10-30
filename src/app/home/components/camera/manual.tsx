import { useEffect, useRef } from "react";

export function Manual({ selected }: { selected: "scanning" | "manual" | "manage" }) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (selected === "manual") {
            audioRef.current = new Audio("/asd.mp3");
            audioRef.current.loop = true;
            audioRef.current.play().catch((err) => console.log(err));
        } else {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, [selected]);
    return (
        <div
        className={`bg-white z-2
            fixed inset-0 h-[100dvh] w-[100dvw]
            transition-transform duration-300 ease-in-out
            ${selected === "manual" ? "translate-x-0" : "-translate-x-full"}
        `}
        >
            <div className="w-full h-[20vh]" />
            <div className="w-full h-[60vh] max-h-[60vh] flex flex-col items-center text-center overflow-y-auto px-4">
                <p className="text-4xl font-bold mt-4">คู่มือ (เดี๋ยวมาเขียน)</p>
                <p className="text-lg text-gray-600 mt-2">1. คือคนอย่างเธอมันเป็นคนใจร้าย ข้อ</p>
                <p className="text-lg text-gray-600 mt-2">2. คือใจของเธอมันบางสะยิ่งกว่าใบไม้</p>
                <p className="text-lg text-gray-600 mt-2">3. คือไม่ต้องพูดว่าเธอลำบากใจ และ</p>
                <p className="text-lg text-gray-600 mt-2">4. คือเธอช่วยไปไกลๆ ฉันเลยจะได้ไหม</p>
                <p className="text-lg text-gray-600 mt-2">5. คือฉันไม่ควรที่จะอยู่ตรงนี้ ข้อ</p>
                <p className="text-lg text-gray-600 mt-2">6. คือไม่ต้องเสต้องแสร้งว่าเธอเป็นคนดี</p>
                <p className="text-lg text-gray-600 mt-2">7. คือเธอช่วยเลือกมาเลยสักคนที และ</p>
                <p className="text-lg text-gray-600 mt-2">8. คือฉันจะได้ไม่ต้องมาเดินเป็นวงรี จะได้รีบไป</p>                
            </div>
        </div>
    );
}
