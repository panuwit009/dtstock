import { useShow } from './showcontext';

export function AlertPTB ( { children }: { children: React.ReactNode; } ) {
    const { setShow } = useShow();

    const overlay = <div className="fixed bg-black/40 inset-0 z-10" onClick={()=>setShow(null)} />;
    
    return (
        <>
            {overlay}

            <div className={`fadeInUpOnce fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-11
            bg-white rounded-2xl w-sm flex flex-col items-center space-y-7 px-10 py-6 drop-shadow-lg/20 
            border-t-6 border-emerald-400`}>   
                <div className='text-black absolute top-2 right-3 rounded-full hover:cursor-pointer'
                onClick={()=>setShow(null)}>
                    ✖
                </div>
                { children }
            </div>
        </>
    );
}

export function AlertPTBIcon ( { children, className }: { children: React.ReactNode; className?: string; } ) {
    return (
    <div className={`text-white text-3xl px-6 py-4 rounded-full animate-bounce ${className}`}>
        { children }
    </div>
    );
}

export function AlertPTBMessageSection ( { children }: { children: React.ReactNode; } ) {
    return (
    <div className='text-center space-y-3 hover:cursor-default'>
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
    <div className="text-gray-500 text-sm">
        { children }
    </div>
    );
}

export function AlertPTBConfirmButton ( { children, className }: { children: React.ReactNode; className?: string; } ) {
    const { setShow } = useShow();
    return (
    <div className={`w-full text-center text-white rounded-2xl shadow-lg p-4 font-semibold
        translate duration-300 hover:cursor-pointer hover:scale-110 active:scale-95 ${className}`}
        onClick={()=>setShow(null)}>
        { children }
    </div>
    );
}