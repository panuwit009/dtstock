"use client";
import { setIslogin } from "../type";

export default function Login ({setIslogin}: setIslogin) {
    return (
<div className="bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 min-h-screen w-screen flex justify-center items-center">
      <div className="w-[90%] max-w-md bg-white rounded-xl shadow-2xl p-10">
        <div className="flex flex-col items-center space-y-6">
            <div className="text-3xl font-bold text-sky-600">เข้าสู่ระบบ</div>
                <div className="text-black">รูปภาพ</div>
                <div className="w-full space-y-5">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1">Gmail</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 rounded-md border-2 border-gray-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 rounded-md border-2 border-gray-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 outline-none transition"
                        />
                    </div>

                <button
                onClick={() => {alert("เข้าสู่ระบบสำเร็จ"); setIslogin(true);}}
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition active:scale-[0.98]"
                >
                Login
                </button>
            </div>
        </div>
      </div>
    </div>
    );
}
