import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        id: nanoid(5),
        notesTitle: 'How to build App',
        notesContent: 'Hello in this tutorial we will discuss about ',
        createdDate: `28-06-2022`
    }
]

const notesSlice = createSlice({
    name: 'Notes Slice',
    initialState: initialState,
    reducers: {
        createNotes: (state, action) => {
            state.push(action.payload)
        },
        deleteNote: (state, action) => {
            return state.filter((data) => data.id !== action.payload)
        },
    }
})


export default notesSlice;