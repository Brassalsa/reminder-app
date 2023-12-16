import { configureStore } from "@reduxjs/toolkit";

import reminderReducer from "../reminder/remindersSlice";
import userReducer from "../user/userSlice";

export const store = configureStore({
  reducer: {
    reminders: reminderReducer,
    user: userReducer,
  },
});

store.subscribe(() => {});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
