import {create}  from 'zustand' ;


const Popupstore =  create((set)=>({
    Open :false ,
    Togglepopup: ()=>{
        set((state)=>({
            Open:!state.Open
        }))
    }
}))

export default Popupstore;