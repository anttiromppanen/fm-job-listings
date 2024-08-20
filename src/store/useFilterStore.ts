import { create } from "zustand";

interface FilterState {
  filter: string[];
  // eslint-disable-next-line no-unused-vars
  setFilter: (tag: string) => void;
}

const useFilterStore = create<FilterState>((set) => ({
  filter: [],
  setFilter: (tag) =>
    set((state) => {
      if (state.filter.includes(tag)) {
        return { filter: state.filter.filter((t) => t !== tag) };
      }
      return { filter: [...state.filter, tag] };
    }),
}));

export default useFilterStore;
