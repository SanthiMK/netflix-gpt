import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

const initialState: User = {} as User;
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return initialState;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
