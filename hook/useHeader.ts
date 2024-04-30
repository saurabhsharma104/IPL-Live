import { create } from 'zustand'

type Store={
    activeTab: string,
    setActiveTab:(val: string) => void
}

export const useHeader = create<Store>()((set) => ({
    activeTab : "Matches",
    setActiveTab: (val) => set((state) => ({ activeTab: val })),
}))
