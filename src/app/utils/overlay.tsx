import { useShow } from '@/app/utils/showcontext';

export const Overlay = () => {
    return (
        <div className="fixed bg-black/40 inset-0 z-10" />
    );
};

export const OverlayDismiss = () => {
    const { setShow } = useShow();
    return (
        <div className="fixed bg-black/40 inset-0 z-10" onClick={()=>setShow(null)} />
    );
};
export const overlay = <Overlay />;
export const overlayDismiss = <OverlayDismiss />;