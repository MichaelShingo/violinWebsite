import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
	value: LocationState;
};

export type Coordinate = {
	x: number;
	y: number;
};

export type BoundingBox = {
	topLeft: Coordinate;
	topRight: Coordinate;
	bottomRight: Coordinate;
	bottomLeft: Coordinate;
};

const boundingBoxInitialState: BoundingBox = {
	topLeft: { x: 0, y: 0 },
	topRight: { x: 0, y: 0 },
	bottomRight: { x: 0, y: 0 },
	bottomLeft: { x: 0, y: 0 },
};

export const boundingClientRectToBoundingBox = (rect: DOMRect): BoundingBox => {
	return {
		topLeft: { x: rect.left, y: rect.top },
		topRight: { x: rect.right, y: rect.top },
		bottomRight: { x: rect.right, y: rect.bottom },
		bottomLeft: { x: rect.left, y: rect.bottom },
	};
};

type LocationState = {
	isStartingTransition: boolean;
	isEndingTransition: boolean;
};

const initialState = {
	value: {
		isStartingTransition: false,
		isEndingTransition: false,
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
		}
	},
});

export const {
	setIsStartingTransition,
	setIsEndingTransition,
} = location.actions;
export default location.reducer;
