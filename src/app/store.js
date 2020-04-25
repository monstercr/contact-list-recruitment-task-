import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../modules/usersSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
