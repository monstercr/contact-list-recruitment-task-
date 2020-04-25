import { createSlice } from "@reduxjs/toolkit";
import { sortUsers } from "../utils/sort";
import { fetchUsers } from "../api/users";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: "idle",
    success: false,
    error: null,
  },
  // reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.success = false;
      }
    },
    [fetchUsers.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.data = sortUsers(action.payload);
        state.success = true;
      }
    },
    [fetchUsers.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = action.error;
        state.success = false;
      }
    },
  },
});

export default usersSlice.reducer;
