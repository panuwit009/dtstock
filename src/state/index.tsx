import { create } from "zustand";
import type { uiStateType } from "./type";

export const useUiState = create<uiStateType>((set) => ({
    sidebarOpen: true,
    setSidebarOpen: (value) => set({ sidebarOpen: value}),
    closeSidebar: () => set({ sidebarOpen: false }),
}));