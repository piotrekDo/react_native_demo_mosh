import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
}));

export default useAuthStore