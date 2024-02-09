import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	type: '',
	variants: ''
};


export const SelectorsSlice = createSlice({
	name: "User",
	initialState,
	reducers: {
		setVariants: (state, action) => {
			// state.token = action.payload.token;
			// state.user.id = action.payload.user.id;
			// state.user.expires = action.payload.user.expires;
			// state.user.username = action.payload.user.username;
		},
	},
});

export const { setVariants } = SelectorsSlice.actions;

export default SelectorsSlice.reducer;
