import { create } from "zustand";

export type UserStore = {
  user: User;
};

export const useUserStore = create<UserStore>((set) => ({
  user: { id: "user-1", profilePhoto: "", username: "MT" },
}));
