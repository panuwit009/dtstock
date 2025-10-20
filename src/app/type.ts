export interface CameraResultItem {
  barcode: string;
}
export type CameraResult = CameraResultItem[];

export interface setIslogin {
    setIslogin: React.Dispatch<React.SetStateAction<boolean>>;
};