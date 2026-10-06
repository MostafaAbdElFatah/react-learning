import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Cat } from "../models/cat";

export const LikedContext = createContext<{ 
    liked: Cat['id'][]; 
    setLiked: Dispatch<SetStateAction<Cat['id'][]>>;
} | null >(null);
