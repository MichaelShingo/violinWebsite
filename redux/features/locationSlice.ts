import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
	value: LocationState;
};

type ModalContent = 'video';

type LocationState = {
	isStartingTransition: boolean;
	isEndingTransition: boolean;
	isMenuOpen: boolean;
	hoveredMenuInfo: string;
	isMenuHovered: boolean;
	isModalOpen: boolean;
	modalContent: ModalContent;
	currentVideo: string;
};

const initialState = {
	value: {
		isStartingTransition: false,
		isEndingTransition: false,
		isMenuOpen: false,
		hoveredMenuInfo: 'home',
		isMenuHovered: false,
		isModalOpen: false,
		modalContent: 'video',
		currentVideo: null,
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
		},
		setIsModalOpen: (state, action: PayloadAction<boolean>) => {
			state.value.isModalOpen = action.payload;
		},
		setModalContent: (state, action: PayloadAction<ModalContent>) => {
			state.value.modalContent = action.payload;
		},
		setCurrentVideo: (state, action: PayloadAction<string>) => {
			state.value.currentVideo = action.payload;
		},
	}
});

export const {
	setIsStartingTransition,
	setIsEndingTransition,
	setIsMenuOpen,
	setHoveredMenuInfo,
	setIsMenuHovered,
	setIsModalOpen,
	setModalContent,
	setCurrentVideo,
} = location.actions;
export default location.reducer;
