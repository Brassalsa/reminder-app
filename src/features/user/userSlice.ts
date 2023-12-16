import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type UserAction = {
  type: string;
  payload: User;
};

const initialState = null as User;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: any, action: UserAction) => {
      state = { ...action.payload, id: uuidv4() };
      return state;
    },
    logout: () => {
      return null;
    },
  },
});
const userReducer = userSlice.reducer;
export default userReducer;
export const { login, logout } = userSlice.actions;
