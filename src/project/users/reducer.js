// import axios from "axios"
// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     users: []
//   },
//   reducers: {
//     createUser: (state, action) => {
//         state.users.push(action.payload);
//     },
//     readAllUsers: (state, action) => {
//         state.users = action.payload
//     },
//     updateUser: (state, action) => {
//       const index = state.users.findIndex(user => user._id === action.payload._id);
//       state.users[index] = action.payload;
//     },
//     deleteUser: (state, action) => {
//       state.users = state.users.filter(user => user._id !== action.payload._id);
//     }
//   },
// })
// export default userSlice.reducer;
// export const { createUser, readAllUsers, updateUser, deleteUser } = userSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = slice.actions;
export default slice.reducer;