import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { createMeSlice, MeSlice } from "./me";
import { firebaseStorage } from "../storage/firebase.storages";

type ShareState = MeSlice;

export const useProfileBoundStore = create<ShareState>()(
    devtools(
        persist(
            (...a) => ({
                ...createMeSlice(...a),
            }), {
            name: 'portfolio-storage',
            storage: firebaseStorage
        }
        )
    )
);
