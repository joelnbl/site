import { StateCreator } from "zustand";

export interface MeSlice {
  name: string;
  biography: string;
  quote: string;
  location: string;
}

export const createMeSlice: StateCreator<MeSlice> = () => ({
  name: '',
  biography: '',
  quote: '',
  location: ''
});
