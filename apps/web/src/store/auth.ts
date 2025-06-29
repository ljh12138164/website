import type { UserInfo } from "apis";
import { create } from "zustand";

interface AuthStore {
	userInfo: UserInfo | null;
	setUserInfo: (userInfo: UserInfo) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
	userInfo: null,
	setUserInfo: (userInfo) => set({ userInfo }),
}));
