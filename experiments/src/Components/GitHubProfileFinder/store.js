import { create } from "zustand";

const git  = create((set)=>({
    user:{},
    getUser:(user)=>{
        set(()=>({
            user:user
        }))
    }
}))
export default git;