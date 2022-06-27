import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../typings/store";
import model from "../slices/model";

const useModel = () => {
    const modelState = useSelector((state: RootState) => state.model);
    const dispatch = useDispatch();

    const modelHandler = React.useCallback(
        (payload: any) => {
            dispatch(model.actions.modelHandler(payload));
        },
        [dispatch]
    );


    return { modelState, modelHandler };
};

export default useModel;
