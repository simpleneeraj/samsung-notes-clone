import { createSlice } from "@reduxjs/toolkit";



const modelSlice = createSlice({
    name: "Model",
    initialState: '',
    reducers: {
        modelHandler: (state, action) => {
            return state = action.payload;
        }
    }
});

export default modelSlice;
