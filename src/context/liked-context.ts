import { createContext, use, type Dispatch, type SetStateAction } from "react";
import type { Cat } from "../models/cat";

export const LikedContext = createContext<{ 
    liked: Cat['id'][]; 
    setLiked: Dispatch<SetStateAction<Cat['id'][]>>;
} | null >(null);


export function useLiked() {
    const context = use(LikedContext);

    if (!context) {
        throw new Error("useLiked must be used within a LikedProvider");
    }

    return context;
}
