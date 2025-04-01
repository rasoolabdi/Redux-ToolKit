import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfCakes: 20
};

const cakeReducer = createSlice({
    name: "cake",
    initialState,
    reducers: {
        buyCake: (state , action) => {
            state.numOfCakes = state.numOfCakes + Number(action.payload);
        }
    }
});

export const { buyCake } = cakeReducer.actions; //Action creator
export default cakeReducer.reducer;