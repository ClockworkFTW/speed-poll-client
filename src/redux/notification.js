import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const NOTIFICATION_TYPE_SUCCESS = "NOTIFICATION_TYPE_SUCCESS";
export const NOTIFICATION_TYPE_WARNING = "NOTIFICATION_TYPE_WARNING";
export const NOTIFICATION_TYPE_ERROR = "NOTIFICATION_TYPE_ERROR";

export const flashNotification = createAsyncThunk(
  "notification/flashNotification",
  async ({ type, message }, { dispatch }) => {
    dispatch(setNotification({ type, message }));

    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  }
);

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

export const { setNotification, clearNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
