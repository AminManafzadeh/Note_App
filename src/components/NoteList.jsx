import { IoTrashOutline } from "react-icons/io5";

function NoteList({ notes, onDeleteNote, onCompleted }) {
  return (
    <div>
      {notes?.map((note) => {
        return (
          <NoteItem
            key={note.id}
            note={note}
            onDeleteNote={onDeleteNote}
            onCompleted={onCompleted}
          />
        );
      })}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDeleteNote, onCompleted }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="p-4 bg-white rounded-xl mb-6">
      <div className="flex items-center justify-between pb-1 rounded-md mb-1 border-b  -border-b--text-100">
        <div>
          <p
            className={`text-lg -text--text-700 mb-2 font-bold ${
              note.completed ? "line-through opacity-50" : ""
            }`}
          >
            {note?.title}
          </p>
          <p className="-text--text-400 mb-2 font-medium">{note?.desc}</p>
        </div>

        <div className="flex gap-6 items-center">
          <button onClick={() => onDeleteNote(note.id)}>
            <IoTrashOutline className="w-5 h-5 -text--rose-500 bg-none" />
          </button>
          <input
            type="checkbox"
            name={note.id}
            value={note.id}
            onChange={onCompleted}
            checked={note.completed}
          />
        </div>
      </div>

      <div className="-text--text-300">
        <p>{new Date(note?.createdAt).toLocaleDateString("en-US", options)}</p>
      </div>
    </div>
  );
}
