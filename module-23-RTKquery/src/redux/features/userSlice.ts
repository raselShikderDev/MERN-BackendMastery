import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../types";
import type { RootState } from "../store";

 interface IinitialState{
    users:IUser[]
}

const initialState:IinitialState ={
   users:[]
}

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state, action:PayloadAction<string>)=>{
            const user:IUser = {
                userId:nanoid(),
                name:action.payload,
            }
            state.users.push(user)
        },
        deleteUser:(state, action:PayloadAction<string>)=>{
            state.users = state.users.filter((user)=>user.userId !== action.payload)
        }
    }
})

export const userSelector = (state:RootState)=>{
    return state.allUsers.users
}

export const {addUser, deleteUser} = userSlice.actions

export default userSlice.reducer