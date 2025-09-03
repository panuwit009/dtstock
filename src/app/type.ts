export interface CameraResultItem {
  barcode: string;
}
export type CameraResult = CameraResultItem[];

export interface setIslogin {
    setIslogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ShowType =
  | { type: 'alert'; detail: alertDetail }
  | { type: 'tooltip'; detail: tooltipDetail }
  // | { type: null; detail?: null };

interface alertDetail {
    status?: 'success' | 'error' | null;
    headerMessage?: string | null;
    message?: string | null;
    confirmBt?: boolean;
    confirmBtText?: string;
};

interface tooltipDetail {
    message?: string | null;
};