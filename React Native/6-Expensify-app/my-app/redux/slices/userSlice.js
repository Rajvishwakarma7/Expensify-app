import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload;
    },
    setUserLoading: (state, actions) => {
      state.userLoading = actions.payload;
    },
  },
});

export const { setUser, setUserLoading } = userSlice.actions;

export default userSlice.reducer;
