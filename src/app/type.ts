export interface CameraResultItem {
  barcode: string;
}
export type CameraResult = CameraResultItem[];

export interface setIslogin {
    setIslogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface alertDetail {
    type?: 'success' | 'error' | null;
    headerMessage?: string | null;
    message?: string | null;
    confirmBt?: boolean;
    confirmBtText?: string;
};