import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: { type: null, message: null },
  reducers: {
    setNotification: (state, action) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    clearNotification: (state) => {
      state.type = null;
      state.message = null;
    },
  },
});

const { actions, reducer } = notificationSlice;

export const { setNotification, clearNotification } = actions;

export default reducer;
