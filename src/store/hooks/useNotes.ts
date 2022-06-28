import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import notesSlice from 'store/slices/notes';
import { RootState } from 'typings/store';
const useNotes = () => {
    const notesArray = useSelector((state: RootState) => state.notes);
    const dispatch = useDispatch();


    const createNotes = React.useCallback((data: any) => {

        let id = nanoid(6)
        let d = { id, ...data }

        dispatch(notesSlice.actions.createNotes(d))
    }, [dispatch])


    const deleteNote = React.useCallback((data: any) => {
        dispatch(notesSlice.actions.deleteNote(data))
    }, [dispatch])
    // Return Values
    return { notesArray, deleteNote, createNotes }

}
export default useNotes;