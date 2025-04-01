import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfMilks: 30
};

const milkReducer = createSlice({
    name: "milk",
    initialState,
    reducers: {
        buyMilk: (state) => {
            state.numOfMilks = state.numOfMilks + 1;
        }
    }
});

export const { buyMilk } = milkReducer.actions;
export default milkReducer.reducer;