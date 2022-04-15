import { createSlice } from "@reduxjs/toolkit";

export const NOTIFICATION_TYPE_SUCCESS = "NOTIFICATION_TYPE_SUCCESS";
export const NOTIFICATION_TYPE_WARNING = "NOTIFICATION_TYPE_WARNING";
export const NOTIFICATION_TYPE_ERROR = "NOTIFICATION_TYPE_ERROR";

const notificationSlice = createSlice({
  name: "notification",
  initialState: { type: null, path: null, message: null },
  reducers: {
    setNotification: (state, action) => {
      state.type = action.payload.type;
      state.path = action.payload.path;
      state.message = action.payload.message;
    },
    clearNotification: (state) => {
      state.type = null;
      state.path = null;
      state.message = null;
    },
  },
});

const { actions, reducer } = notificationSlice;

export const { setNotification, clearNotification } = actions;

export default reducer;
