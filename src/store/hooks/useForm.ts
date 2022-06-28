import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formSlice from 'store/slices/form';
import { RootState } from 'typings/store';

const useForm = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: RootState) => state.form);

    /**************************
    On Change Form Title
    ***************************/
    const onChangeTitle = React.useCallback(
        (str: string) => {


            dispatch(formSlice.actions.setNotesTitle(str));
        },
        [dispatch]
    );
    /**************************
    
    ***************************/
    const onChangeContent = React.useCallback(
        (str: string) => {
            dispatch(formSlice.actions.setNotesContent(str));
        },
        [dispatch]
    );
    const setCreatedDate = React.useCallback(
        (str: string) => {
            dispatch(formSlice.actions.setCreatedDate(str));
        },
        [dispatch]
    );
    // Return Values
    return {
        formState,
        onChangeTitle,
        onChangeContent,
        setCreatedDate
    }

}
export default useForm;
