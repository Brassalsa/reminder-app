import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type ReminderAction = { type: string; payload: Reminder };
type ReminderId = { type: string; payload: Reminder["id"] };

const remindersSlice = createSlice({
  name: "reminders",
  initialState: <Reminder[]>[],

  reducers: {
    addReminder: (state, action: ReminderAction) => {
      state.push({ ...action.payload, id: uuidv4() });
    },

    deleteReminder: (state, action: ReminderId) => {
      return state.filter((reminder) => reminder.id !== action.payload);
    },

    modifyReminder: (state, action: ReminderAction) => {
      state.forEach((reminder, i) => {
        if (reminder.id === action.payload.id) {
          state[i] = action.payload;
        }
      });
    },
    toggleReminder: (state, action: ReminderId) => {
      state.map((reminder) => {
        if (reminder.id === action.payload) {
          reminder.enabled = !reminder.enabled;
        }
      });
    },
  },
});
const reminderReducer = remindersSlice.reducer;
export default reminderReducer;
export const { addReminder, deleteReminder, modifyReminder, toggleReminder } =
  remindersSlice.actions;
