import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notesTitle: '',
    notesContent: '',
    createdDate: ``
}

const formSlice = createSlice({
    name: 'Form',
    initialState: initialState,
    reducers: {
        setNotesTitle: (state, action) => {
            state.notesTitle = action.payload
        },
        setNotesContent: (state, action) => {
            state.notesContent = action.payload
        },
        setCreatedDate: (state, action) => {
            state.createdDate = action.payload
        }
    }
})


export default formSlice;