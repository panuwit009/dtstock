export interface setIslogin {
    setIslogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface popupDetail {
    type?: 'success' | 'error' | null;
    headerMessage?: string | null;
    message?: string | null;
    confirmBt?: boolean;
    confirmBtText?: string;
}