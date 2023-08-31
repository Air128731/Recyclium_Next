import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  isLoggedIn: boolean;
  user: {};
  members: [];
}

const initialState: UserState = {
  isLoggedIn: false,
  user: {},
  members: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.members = [];
    },
    authenticate: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    restoreAuthState: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    setAllMembers: (state, action: PayloadAction<any>) => {
      state.members = action.payload;
    },
  },
});

export const userActions = {
  ...userSlice.actions,
  allMembers: createAction<{ url: string }>("user/allMembers"),
};

export default userSlice.reducer;
