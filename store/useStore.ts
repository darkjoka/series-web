import create from "zustand";

const useStore = create<Store>((set) => ({
  isSideOpen: false,
  isPlayerOpen: false,
  isSearchOpen: false,
  isAnyOpen: false,
  playerSrc: "",
  openSide: () => set((state) => ({ isSideOpen: true, isAnyOpen: true })),
  closeSide: () => set((state) => ({ isSideOpen: false, isAnyOpen: false })),
  openPlayer: () => set((state) => ({ isPlayerOpen: true, isAnyOpen: true })),
  closePlayer: () => set((state) => ({ isPlayerOpen: false, isAnyOpen: false, playerSrc: "" })),
  openSearch: () => set((state) => ({ isSearchOpen: true, isAnyOpen: true })),
  closeSearch: () => set((state) => ({ isSearchOpen: false, isAnyOpen: false })),
  setPlayer: (source: string) => set((state) => ({ playerSrc: source }))
}));


export type Store = {
  isSideOpen: boolean
  isPlayerOpen: boolean
  isSearchOpen: boolean
  isAnyOpen: boolean
  playerSrc: string
  openSide: VoidFunction
  closeSide: VoidFunction
  openPlayer: VoidFunction
  closePlayer: VoidFunction
  openSearch: VoidFunction
  closeSearch: VoidFunction
  setPlayer: (source: string) => void

}


export default useStore;
