import { useShow } from '@/utils';
import { useUiState } from "@/state";

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

export const SidebarOverlayDissmiss = () => {
    const setSidebarOpen = useUiState((s) => (s.setSidebarOpen));
    return (
        <div className="fixed bg-black/40 inset-0 z-29 md:hidden" onClick={()=>setSidebarOpen(false)} />
    );
};

export const overlay = <Overlay />;
export const overlayDismiss = <OverlayDismiss />;
export const overlayBlur = <OverlayBlur />;