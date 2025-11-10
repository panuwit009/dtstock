import { useShow } from '@/utils';

export function AlertPTB ( { children, className }: { children: React.ReactNode; className?: string; } ) {
    const { setShow } = useShow();
    
    return (
        // animation ค่อยๆเฟดขึ้นมา "fadeInUpOnce" 
        <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-11
        bg-white rounded-2xl w-xs sm:w-sm flex flex-col items-center px-10 py-6 
        ${className}`}>   
            <div className='text-black absolute top-2 right-3 rounded-full hover:cursor-pointer'
            onClick={()=>setShow(null)}>
                ✖
            </div>
            { children }
        </div>
    );
}

export function AlertPTBIcon ( { children, className }: { children: React.ReactNode; className?: string; } ) {
    return (
    <div className={`text-white text-3xl px-6 py-4 my-4 rounded-full ${className}`}>
        { children }
    </div>
    );
}

export function AlertPTBMessageSection ( { children }: { children: React.ReactNode; } ) {
    return (
    <div className='text-center mb-2 hover:cursor-default'>
        { children }
    </div>
    );
}

export function AlertPTBHeaderMessage ( { children }: { children: React.ReactNode; } ) {
    return (
    <div className="text-black text-2xl font-semibold">
        { children }
    </div>
    );
}

export function AlertPTBMessage ( { children }: { children: React.ReactNode; } ) {
    return (
    <div className="text-gray-500 mt-2 text-sm">
        { children }
    </div>
    );
}

export function AlertPTBConfirmButton ( { children, className }: { children: React.ReactNode; className?: string; } ) {
    const { setShow } = useShow();
    return (
    <div className={`w-full text-center text-white rounded-2xl mt-2 shadow-lg p-3 font-semibold
        translate duration-300 hover:cursor-pointer hover:scale-110 active:scale-95 ${className}`}
        onClick={()=>setShow(null)}>
        { children }
    </div>
    );
}