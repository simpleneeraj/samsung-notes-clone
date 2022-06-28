import React from "react";
import useForm from "store/hooks/useForm";
import useNotes from "store/hooks/useNotes";
import css from "styles/form.module.scss";

interface FormProps {
  onSubmit: () => void;
  onClose: () => void;
}

const Form = (props: FormProps) => {
  const { onClose, onSubmit } = props;

  // const dispatch = useDispatch();
  // const formState = useSelector((state: RootState) => state.form);

  // const onChangeTitle = React.useCallback(
  //   (str: string) => {
  //     dispatch(formSlice.actions.setNotesTitle(str));
  //   },
  //   [dispatch]
  // );

  const { formState, onChangeTitle, onChangeContent, setCreatedDate } =
    useForm();
  // React.useMemo
  const { notesArray, createNotes } = useNotes();

  const onSubmitX = React.useCallback(() => {
    createNotes(formState);
  }, [createNotes, formState]);

  // const onSubmitX = () => {
  //   createNotes(formState);
  //   // delay(2000).then(() => {
  //   //   onClose();
  //   // });
  // };

  console.log(notesArray);
  return (
    <div className={css.container}>
      <div className={css.field}>
        <input
          onChange={(e) => onChangeTitle(e.target.value)}
          type="text"
          placeholder="Notes Title"
        />
        <textarea
          onChange={(e) => onChangeContent(e.target.value)}
          placeholder="Writing Notes...."
        />
        <input onChange={(e) => setCreatedDate(e.target.value)} type="date" />
      </div>
      <div className={css.controls}>
        <button onClick={onClose}>Close</button>
        <button type="submit" onClick={onSubmitX}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default Form;
