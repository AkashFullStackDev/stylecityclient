import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const validateUser = createAsyncThunk(
  "validateUser",
  async (userData) => {
    userData.password = "test123";
    console.log(userData);
    const API = "http://localhost:8080/api/login";
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });

    const user = await response.json();
    localStorage.setItem("userData", JSON.stringify(user));
    return user;
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isLoading: false,
    isLoggedIn: false,
    data: {},
    isError: false,
  },
  reducers: {
    removeUser(state, action) {
      return {
        isLoading: false,
        isLoggedIn: false,
        data: {},
        isError: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(validateUser.pending, (state, action) => {
      state.isLoading = true;
      state.isLoggedIn = false;
    });
    builder.addCase(validateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(validateUser.rejected, (state, action) => {
      state.isError = true;
      state.isLoggedIn = false;
      state.isLoading = false;
      console.log(`Error: ${action.payload}`);
    });
  },
});

export default userSlice.reducer;
export const {removeUser} = userSlice.actions;
