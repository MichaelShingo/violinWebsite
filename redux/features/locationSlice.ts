import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
	value: LocationState;
};


type LocationState = {
	isStartingTransition: boolean;
	isEndingTransition: boolean;
	isMenuOpen: boolean;
	hoveredMenuInfo: string;
	isMenuHovered: boolean;
};

const initialState = {
	value: {
		isStartingTransition: false,
		isEndingTransition: false,
		isMenuOpen: false,
		hoveredMenuInfo: 'home',
		isMenuHovered: false,
	} as LocationState,
} as InitialState;

export const location = createSlice({
	name: 'location',
	initialState: initialState,
	reducers: {
		setIsStartingTransition: (state, action: PayloadAction<boolean>) => {
			state.value.isStartingTransition = action.payload;
		},
		setIsEndingTransition: (state, action: PayloadAction<boolean>) => {
			state.value.isEndingTransition = action.payload;
		},
		setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
			state.value.isMenuOpen = action.payload;
		},
		setHoveredMenuInfo: (state, action: PayloadAction<string>) => {
			state.value.hoveredMenuInfo = action.payload;
		},
		setIsMenuHovered: (state, action: PayloadAction<boolean>) => {
			state.value.isMenuHovered = action.payload;
		}
	},
});

export const {
	setIsStartingTransition,
	setIsEndingTransition,
	setIsMenuOpen,
	setHoveredMenuInfo,
	setIsMenuHovered,
} = location.actions;
export default location.reducer;
