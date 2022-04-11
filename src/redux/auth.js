import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as authAPI from "../api/auth";

import { setNotification, clearNotification } from "./notification";

export const localSignIn = createAsyncThunk(
  "auth/localSignIn",
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const user = await authAPI.localSignIn(credentials);
      return user;
    } catch (error) {
      dispatch(setNotification({ type: "SIGN_IN_ERROR", message: error }));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      return rejectWithValue(false);
    }
  }
);

export const localSignUp = createAsyncThunk(
  "auth/localSignUp",
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const user = await authAPI.localSignUp(credentials);
      return user;
    } catch (error) {
      dispatch(setNotification({ type: "SIGN_UP_ERROR", message: error }));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      return rejectWithValue(false);
    }
  }
);

export const signOut = createAsyncThunk(
  "auth/signOut",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await authAPI.signOut();
      return null;
    } catch (error) {
      dispatch(setNotification({ type: "SIGN_OUT_ERROR", message: error }));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      return rejectWithValue(false);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false },
  reducers: {
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(localSignIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(localSignIn.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(localSignIn.rejected, (state, action) => {
      state.loading = action.payload;
    });
    builder.addCase(localSignUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(localSignUp.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(localSignUp.rejected, (state, action) => {
      state.loading = action.payload;
    });
    builder.addCase(signOut.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signOut.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(signOut.rejected, (state, action) => {
      state.loading = action.payload;
    });
  },
});

const { actions, reducer } = authSlice;

export const { setAuthUser } = actions;

export default reducer;
