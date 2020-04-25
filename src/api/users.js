import { createAsyncThunk } from "@reduxjs/toolkit";

const URL =
  "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(URL).then((response) => response.json());

  return response;
});
