import { createJSONStorage, StateStorage } from "zustand/middleware"

const fireBaseUrl = process.env.NEXT_PUBLIC_FIREBASE_API

const storageApi: StateStorage = {
    getItem: async function (name: string): Promise<string | null> {

       try {
        const data = await fetch(`${fireBaseUrl}/${name}.json`).then( res => res.json())
        return JSON.stringify( data )
       } catch (error) {
        console.error(error)
        return null
       }
    },

    setItem: async function (name: string, value: string): Promise<void> {
        await fetch(`${fireBaseUrl}/${name}.json`, {
            method: "PUT",
            body: value
        }).then( res => res.json())
    },

    removeItem: function (name: string): void {

        console.log("removeItem", name)
    
    }
}

export const firebaseStorage = createJSONStorage( () => storageApi )