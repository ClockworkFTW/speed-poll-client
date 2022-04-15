import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as authAPI from "../api/auth";

import {
  setNotification,
  clearNotification,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_ERROR,
} from "./notification";

export const localSignIn = createAsyncThunk(
  "auth/localSignIn",
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const user = await authAPI.localSignIn(credentials);

      dispatch(
        setNotification({
          type: NOTIFICATION_TYPE_SUCCESS,
          message: "Signed in successfully with email!",
        })
      );

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      return user;
    } catch (error) {
      dispatch(
        setNotification({
          type: NOTIFICATION_TYPE_ERROR,
          message: error,
        })
      );

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

      dispatch(
        setNotification({
          type: NOTIFICATION_TYPE_SUCCESS,
          message: "Signed up successfully with email!",
        })
      );

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      return user;
    } catch (error) {
      dispatch(
        setNotification({
          type: NOTIFICATION_TYPE_ERROR,
          message: error,
        })
      );

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      return rejectWithValue(false);
    }
  }
);

export const oauthSignIn = createAsyncThunk(
  "auth/oauthSignIn",
  async ({ user, error }, { dispatch, rejectWithValue }) => {
    if (user) {
      dispatch(
        setNotification({
          type: NOTIFICATION_TYPE_SUCCESS,
          message: `Signed in successfully with ${user.source}!`,
        })
      );

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      return user;
    }

    if (error) {
      dispatch(
        setNotification({
          type: NOTIFICATION_TYPE_ERROR,
          message: error,
        })
      );

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

      dispatch(
        setNotification({
          type: NOTIFICATION_TYPE_SUCCESS,
          message: "Signed out successfully!",
        })
      );

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      return null;
    } catch (error) {
      dispatch(
        setNotification({
          type: NOTIFICATION_TYPE_ERROR,
          message: error,
        })
      );

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
    builder.addCase(oauthSignIn.fulfilled, (state, action) => {
      state.user = action.payload;
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

export default authSlice.reducer;
