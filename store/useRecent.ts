import create from "zustand";
import { persist } from "zustand/middleware";

const useRecentStore = create(
  persist<Recent>(
    (set, get) => ({
      searches: [],
      add: (search: Search) => set({ searches: get().searches.concat(search) }),
      remove: ({ title }: Search) =>
        set({ searches: get().searches.filter((s) => s.title !== title) }),
    }),
    {
      name: "recent",
    }
  )
);

export interface Recent {
  searches: Search[];
  add: (s: Search) => void;
  remove: (s: Search) => void;
}

interface Search {
  title: string;
  permalink: string;
}

const selector = ({ add, remove, searches }: Recent) => {
  return { add, remove, searches };
};

export default function useRecent() {
  let { add, remove, searches } = useRecentStore(selector);
  searches.reverse();
  searches = searches.slice(0, 5);
  return { add, remove, searches };
}
