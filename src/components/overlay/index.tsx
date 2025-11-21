import { useShow } from '@/utils/showcontext';

export const Overlay = () => {
    return (
        <div className="fixed bg-black/40 inset-0 z-35" />
    );
};

export const OverlayDismiss = () => {
    const { setShow } = useShow();
    return (
        <div className="fixed bg-black/40 inset-0 z-35" onClick={()=>setShow(null)} />
    );
};

export const OverlayBlur = () => {
    return (
        <div className="fixed backdrop-blur-md inset-0 z-35" />
    );
};
export const overlay = <Overlay />;
export const overlayDismiss = <OverlayDismiss />;
export const overlayBlur = <OverlayBlur />;