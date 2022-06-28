import React from "react";
import useNotes from "store/hooks/useNotes";
import css from "styles/notes.module.scss";
import delay from "utils/delay";

const AllNotes = () => {
  const { notesArray, deleteNote } = useNotes();

  const cH = (id: any) => {
    console.log(id);
    delay(800).then(() => {
      deleteNote(id);
    });
  };
  return (
    <div className={css.container}>
      <div className={css.top}>
        <h4>Heading</h4>
      </div>
      <div className={css.grid}>
        {notesArray.length <= 0 ? (
          <p>No Content</p>
        ) : (
          notesArray.slice(0, 10).map((data, index) => (
            <Item
              onDelete={() => cH(data.id)}
              key={index}
              // id={data.id}
              // notesContent={data.notesContent}
              // notesTitle={data.notesTitle}
              {...data}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default AllNotes;

interface NotesArrayProps {
  id: string;
  notesTitle: string;
  notesContent: string;
  createdDate: string;
  onDelete: () => void;
}
const Item = (props: NotesArrayProps) => {
  const { id, notesTitle, notesContent, createdDate, onDelete } = props;
  return (
    <div id={id} className={css.items}>
      <h2>{notesTitle}</h2>
      <p>{notesContent}</p>
      <pre>
        <code>{createdDate}</code>
      </pre>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
