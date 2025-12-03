"use client";
import { useState } from "react";

interface Notification {
  id: string;
  type: "low_stock" | "new_stock" | "out_of_stock";
  title: string;
  description: string;
  timestamp: string;
  isUnread: boolean;
}

const StandardBellIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C11.4477 2 11 2.44772 11 3V3.5C8.51472 4.08996 6.5 6.24021 6.5 8.92308V12.5385C6.5 13.3946 6.21563 14.2154 5.7019 14.8462L4.61803 16.1538C3.87071 17.0769 4.52364 18.5 5.69231 18.5H18.3077C19.4764 18.5 20.1293 17.0769 19.382 16.1538L18.2981 14.8462C17.7844 14.2154 17.5 13.3946 17.5 12.5385V8.92308C17.5 6.24021 15.4853 4.08996 13 3.5V3C13 2.44772 12.5523 2 12 2Z"
      fill="currentColor"
    />
    <path
      d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20H10Z"
      fill="currentColor"
    />
  </svg>
);


export default function NotificationButton() {
  const [isOpen, setIsOpen] = useState(false);

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "low_stock",
      title: "มีสินค้าใกล้หมด",
      description: "สินค้า “ไหมขัดฟัน” เหลือเพียง 15 ชิ้น",
      timestamp: "5 นาทีที่แล้ว",
      isUnread: true,
    },
    {
      id: "2",
      type: "new_stock",
      title: "มีสินค้าเข้าใหม่",
      description: "สินค้า “แปรงสีฟัน” เพิ่มเข้ามา 50 ชิ้น",
      timestamp: "22 นาทีที่แล้ว",
      isUnread: true,
    },
    {
      id: "3",
      type: "out_of_stock",
      title: "สินค้าหมดสต็อก",
      description: "สินค้า “เบบี้ออย” หมดสต็อกแล้ว",
      timestamp: "1 ชั่วโมงที่แล้ว",
      isUnread: true,
    },
    {
      id: "4",
      type: "new_stock",
      title: "มีสินค้าเข้าใหม่",
      description: "สินค้า “สบู่เหลว” เพิ่มเข้ามา 100 ชิ้น",
      timestamp: "เมื่อวานนี้",
      isUnread: false,
    },
    {
      id: "5",
      type: "new_stock",
      title: "มีสินค้าเข้าใหม่",
      description: "สินค้า “สบู่เหลว” เพิ่มเข้ามา 100 ชิ้น",
      timestamp: "เมื่อวานนี้",
      isUnread: false,
    },
    {
      id: "6",
      type: "new_stock",
      title: "มีสินค้าเข้าใหม่",
      description: "สินค้า “สบู่เหลว” เพิ่มเข้ามา 100 ชิ้น",
      timestamp: "เมื่อวานนี้",
      isUnread: false,
    },
  ]);

  const newNotificationsCount = notifications.filter((n) => n.isUnread).length;

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({ ...item, isUnread: false }))
    );
  };

  const getBackgroundColorClass = (type: Notification["type"]) => {
    switch (type) {
      case "low_stock":
        return "bg-amber-500";
      case "new_stock":
        return "bg-green-500";
      case "out_of_stock":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative size-16 rounded-full flex items-center justify-center bg-[#685762] hover:scale-110 transition duration-150"
      >

        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C11.4477 2 11 2.44772 11 3V3.5C8.51472 4.08996 6.5 6.24021 6.5 8.92308V12.5385C6.5 13.3946 6.21563 14.2154 5.7019 14.8462L4.61803 16.1538C3.87071 17.0769 4.52364 18.5 5.69231 18.5H18.3077C19.4764 18.5 20.1293 17.0769 19.382 16.1538L18.2981 14.8462C17.7844 14.2154 17.5 13.3946 17.5 12.5385V8.92308C17.5 6.24021 15.4853 4.08996 13 3.5V3C13 2.44772 12.5523 2 12 2Z"
            fill="#ffffff"
          />
          <path
            d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20H10Z"
            fill="#ffffff"
          />
        </svg>

        {newNotificationsCount > 0 && (
          <>
            <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-green-400 animate-ping"></span>
            <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-green-400"></span>
          </>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-110 bg-white rounded-2xl shadow-xl border border-gray-200 z-20 max-h-210 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center gap-3">
                <p className="font-bold text-xl">การแจ้งเตือน</p>

                {newNotificationsCount > 0 && (
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2 py-0.5 rounded-full">
                    {newNotificationsCount} ใหม่
                  </span>
                )}
              </div>

              {newNotificationsCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                >
                  <svg
                    className="w-4 h-4 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17L4 12" />
                  </svg>
                  ทำเครื่องหมายว่าอ่านแล้ว
                </button>
              )}
            </div>
            <div className="mx-auto mt-5 h-[1px] w-[92%] bg-blue-300"></div>
          </div>

          <div className="py-2">
            {notifications.map((item) => {
              const bgColorClass = getBackgroundColorClass(item.type);

              return (
                <div
                  key={item.id}
                  className={`flex items-start gap-3 p-4 hover:bg-gray-50 ${
                    item.isUnread ? "bg-blue-50" : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg ${bgColorClass}`}
                  >
                    <StandardBellIcon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-grow">
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {item.timestamp}
                    </p>
                  </div>

                  {item.isUnread && (
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-1"></span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="p-2">
            <div className="mx-auto mb-2 h-[1px] w-[92%] bg-blue-300"></div>

            <button className="w-full text-center text-blue-500 hover:text-blue-700 py-2">
              ดูทั้งหมด
            </button>
          </div>
          <div className="mx-auto mb-2 h-[5px] w-[20%] bg-blue-400 rounded-full mb-5 "></div>
        </div>
      )}
    </div>
  );
}