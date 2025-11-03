"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoadingAnimation, logoutSuccess } from "@/components";
import { useShow } from "@/utils"
import FormInsertItem from "././forminsertitem";

export default function Scanbarcode (
    { setOpenCamera }:
    { setOpenCamera: React.Dispatch<React.SetStateAction<boolean>>; }
) {
    const [error, setError] = useState<string | null>(null);

    const { setShow } = useShow();
    const router = useRouter();
    function logout (): void {
        setShow(logoutSuccess);
        router.push('/');
    }

    return (
    <>
        <Header>
            <HeaderTitle>ระบบการจัดสินค้าสต็อค</HeaderTitle>
            <HeaderSubtitle>การจัดการสินค้าอย่างมืออาชีพ</HeaderSubtitle>
        </Header>
        
        <Body>
               <LoadingAnimation/>
               {/* <AddOrDecreaseStock 
               stocktype={stocktype}
               setStocktype={setStocktype}
               /> */}
               <div className="flex flex-col items-center gap-2">                  
                   {error && <div className="text-red-500 hover:cursor-pointer" onClick={() => setError("")}>{error}</div>}
               </div>
               
               <Message>หากเครื่องสแกน barcode ใช้งานไม่ได้</Message>
               
            <Scanbarcode>
                <Uicamera>
                    <Messagecamera>เปิดกล้อง</Messagecamera>
                </Uicamera>
                
                <div className="w-full p-2">
                    <div className="flex items-center justify-between">
                        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg hover:scale-110 transition-transform cursor-pointer">
                             <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
                            </svg>
                         </div>

                     </div>
                </div>
                 
                  {/* <div
                     className="flex items-center gap-2 text-white shadow-lg hover:cursor-pointer hover:scale-110 transition duration-300 bg-slate-600 p-6 m-2 rounded-xl"
                     onClick={() => { setOpenCamera(true); }}>
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h2l2-3h10l2 3h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/> 
                             <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" />
                         </svg>
                         เปิดกล้อง
                 </div> */}
             </Scanbarcode>        
         </Body>

    </>
    );

function Message ( { children }: { children: React.ReactNode;}) {
    return (
        <div className="flex items-center justify-center gap-4 px-6">
             <hr className="flex-1 border-gray-400"></hr>
             { children }
             <hr className="flex-1 border-gray-400"></hr>
        </div>
    );
}

function Uicamera ( { children }: { children?: React.ReactNode; } ) {
    return (
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center"
              onClick={() => { setOpenCamera(true); }}>
              <div className="flex flex-col items-center gap-2">
                  <svg className="border-b-4 border-blue-200 w-14 h-14 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  { children } 
              </div>
        </div>
    );
}

function Messagecamera ( { children }: { children?: React.ReactNode; } ) {
    return (
                  <span className="text-sm text-gray-700"> { children } </span>
    );
}


function Header ({children}: {children: React.ReactNode}) {
    return (
        <div className="text-center py-6">
            <div className="space-y-2">
                {children}
            </div>
        </div>
    )
}

function HeaderTitle ({children}: {children: React.ReactNode}) {
    return (
        <div className="text-4xl font-bold text-gray-800">
            {children}
        </div>
    )
}

function HeaderSubtitle ({children}: {children: React.ReactNode}) {
    return (
        <div className="text-sm text-gray-700">
            {children}
        </div>
    )
}

function Body ({children}: {children: React.ReactNode}) {
    return (
        <div className="bg-sky-200/30 md:rounded-3xl shadow-xl border border-gray-100 max-w-lg mx-auto">
            {children}
        </div>
    )
}

function Scanbarcode ({children}: {children: React.ReactNode}) {
    return (
        <div className="relative h-50 w-[90%] bg-white mx-auto rounded-3xl mt-22 mb-6 flex items-end">
            {children}
        </div>
    )
}


}