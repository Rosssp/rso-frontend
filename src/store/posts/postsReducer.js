import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userId: '',
	id: '',
	title: '',
	body: ''
};
//WIP

export const PostsSlice = createSlice({
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

export const { setUser, forgetUser } = PostsSlice.actions;

export default PostsSlice.reducer;
