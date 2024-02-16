import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StaticImageData } from "next/image";
import cubesImg from "@/assets/images/cubes.jpg";

export type Theme = "cube" | "spiral" | "rubix";
//   image: StaticImageData;
interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => {
      return {
        theme: get()?.theme,
        setTheme: (theme: Theme) => set(() => ({ theme })),
      };
    },
    {
      name: "theme",
      onRehydrateStorage: (_state) => {
        const lsThemeState = localStorage.getItem("theme")
          ? JSON.parse(localStorage.getItem("theme") || "")
          : {};

        if (!lsThemeState?.state?.theme) {
          localStorage.setItem(
            "theme",
            JSON.stringify({
              state: {
                theme: "cube",
              },
              version: 0,
            })
          );
        }
      },
    }
  )
);
