"use client";
import Moveable from "react-moveable";
import { useState } from "react";

export default function Try() {
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) {
      setFeedback("กรุณาพิมพ์ข้อความก่อน");
      return;
    }

    setIsLoading(true);
    setFeedback("");

    try {
      // ใช้ fetch POST ไปที่ Telegram API โดยตรง
      const botToken = "8334450831:AAEVSf7ZstwdjrHKu4R8Ogj3gfotLSDZYjw"; // ใส่ token ของคุณ
      const chatId = "5822680961";
      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      const data = await res.json();

      if (data.ok) {
        setFeedback("ส่งข้อความสำเร็จ!");
        setMessage("");
      } else {
        setFeedback("เกิดข้อผิดพลาด: " + data.description);
      }
    } catch (err: any) {
      setFeedback("Error: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

    return (
        // <div className="bg-red-200 text-5xl" id="test">
        //     Test
        //     <Moveable 
        //         target={document.getElementById("test")}
        //         container={null}
        //         origin={true}

        //         /* Resize event edges */
        //         edge={false}

        //         /* draggable */
        //         draggable={true}
        //         onDrag={({
        //         target,
        //         beforeDelta, beforeDist,
        //         left, top,
        //         right, bottom,
        //         delta, dist,
        //         transform,
        //         clientX, clientY,
        //         }: OnDrag) => {
        //             console.log("onDrag left, top", left, top);
        //             // target!.style.left = `${left}px`;
        //             // target!.style.top = `${top}px`;
        //             console.log("onDrag translate", dist);
        //             target!.style.transform = transform;
        //         }}
        //     />
        // </div>
                    
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-indigo-100">
                <div className="flex flex-col items-center bg-white shadow-2xl p-8 rounded-3xl border border-gray-100 w-full max-w-md mx-4">
                    
                    {/* Icon Header */}
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </div>

                    <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">ทดสอบส่งข้อความ Telegram</h1>
                    <p className="text-center text-sm text-gray-500 mb-6">พิมพ์ข้อความและกดส่งเพื่อทดสอบ</p>

                    <input
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl placeholder:text-center focus:outline-none focus:border-sky-400 focus:bg-white transition-all duration-200"
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="พิมพ์ข้อความที่นี่..."
                        disabled={isLoading}
                    />

                    <button
                        className="w-full mt-6 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white font-semibold rounded-xl py-3 px-6 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        onClick={sendMessage}
                        disabled={isLoading}
                    >
                        {isLoading 
                            ? (
                                <>
                                    <div className="w-5 h-5 border-[3px] border-white border-t-transparent rounded-full animate-spin" />
                                    <span>กำลังส่ง...</span>
                                </>
                            )
                            : (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    <span>ส่งข้อความ</span>
                                </>
                            )
                        }
                    </button>

                    {feedback && (
                        <div className="mt-4 w-full p-3 bg-green-50 border border-green-200 rounded-xl">
                            <p className="text-center text-sm text-green-700 font-medium">{feedback}</p>
                        </div>
                    )}
                </div>
            </div>


    )
}