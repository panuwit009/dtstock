"use client";
import { setIslogin } from "../type";

export default function Login({ setIslogin }: setIslogin) {
  return (
    <div className="bg-gradient-to-br from-sky-200 via-sky-300 to-sky-100 min-h-screen w-screen flex justify-center items-center">
      <div className="w-[90%] md:w-[22%] max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="flex flex-col items-center space-y-4">
          {/* <div className="text-3xl font-bold text-sky-600">Login</div> */}
          <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 text-xl font-bold shadow-inner">
            LOGO
          </div>
          <div className="text-gray-500 text-sm">กรุณาเข้าสู่ระบบด้วย Gmail และ รหัสผ่าน</div>
        </div>

        <div className="mt-6 space-y-4">
            <div className="bg-white p-6 rounded-xl border border-gray-300 shadow-lg space-y-4">
                <div>
                    <label className="text-sm font-medium text-gray-700">Gmail</label>
                    <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="placeholder-gray-400 placeholder:text-sm placeholder:italic text-black mt-1 w-full px-3 py-2 rounded-md border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none transition"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <input
                    type="password"
                    placeholder="12345678910"
                    className="placeholder-gray-400 placeholder:text-sm placeholder:italic text-black mt-1 w-full px-3 py-2 rounded-md border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none transition"
                    />
                </div>
            </div>

          <button onClick={() => {alert("เข้าสู่ระบบสำเร็จ"); setIslogin(true);}}
            className="w-full bg-sky-500 text-white font-semibold py-2 rounded-md hover:bg-sky-600 transition active:scale-[0.98] shadow-2xl duration-300 hover:scale-95"
          >
            Login
          </button>

          <button 
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition active:scale-[0.98] shadow-2xl duration-300 hover:scale-95"
          >
            Register
          </button>

          <div className="text-gray-500 text-center">Forget your password ?</div>

        </div>
      </div>
    </div>
  );
}
