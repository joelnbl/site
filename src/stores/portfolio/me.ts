import { StateCreator } from "zustand";

export interface MeSlice {
  name: string;
  biography: string;
  quote: string;
  location: string;
  about_me: string;
  social_networks: {
    email: string;
    phone: string;
    linkedin: string;
    x: string;
    github: string;
  };
}

export const createMeSlice: StateCreator<MeSlice> = () => ({
  name: '',
  biography: '',
  quote: '',
  location: '',
  about_me: '',
  social_networks: {
    email: '',
    phone: '',
    linkedin: '',
    x: '',
    github: ''
  }
});
