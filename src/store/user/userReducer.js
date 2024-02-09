import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: "",
	user: {
		id: "",
		expires: "",
		username: "",
	},
};

export const UserSlice = createSlice({
	name: "User",
	initialState,
	reducers: {
		setUser: (state, action) => {
			// state.token = action.payload.token;
			// state.user.id = action.payload.user.id;
			// state.user.expires = action.payload.user.expires;
			// state.user.username = action.payload.user.username;
		},
		forgetUser: (state) => {
			state.token = "";
			state.user.id = "";
			state.user.expires = "";
			state.user.username = "";
		},
	},
});

export const { setUser, forgetUser } = UserSlice.actions;

export default UserSlice.reducer;
