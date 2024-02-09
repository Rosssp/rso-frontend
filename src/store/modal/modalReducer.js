import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false,
	typeOpen: '',

};

export const modalSlice = createSlice({
	name: "Modal",
	initialState,
	reducers: {
		setOpen: (state, action) => {
			state.isOpen = true;
		},
	},
});

export const { setOpen } = modalSlice.actions;

export default modalSlice.reducer;
