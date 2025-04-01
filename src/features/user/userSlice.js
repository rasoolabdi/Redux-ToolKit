import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncUsers = createAsyncThunk("user/getAsyncUsers" , async (payload , { rejectWithValue  }) => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        return res.data;
    }
    catch(error) {
        return rejectWithValue(error.message);
    }
});

const initialState = {
    loading: false,
    data: [],
    error: ""
};

const userReducer = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => { builder
        .addCase(getAsyncUsers.pending , (state) => {
            state.loading= true,
            state.data= [],
            state.error= ""
        })
        .addCase(getAsyncUsers.fulfilled , (state , action) => {
            state.loading= false,
            state.data = action.payload,
            state.error = ""
        })
        .addCase(getAsyncUsers.rejected , (state , action) => {
            state.loading= false,
            state.data = [],
            state.error = action.payload
        })
    }
});

export default userReducer.reducer;

