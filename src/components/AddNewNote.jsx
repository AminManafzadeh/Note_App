import { useState } from "react";
import { useNotesDispatch } from "../context/NotesContext";

function AddNewNote() {
  const dispatch = useNotesDispatch();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !desc) return null;

    const newNote = {
      title,
      desc,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      completed: false,
    };

    dispatch({ type: "addNotes", payload: newNote });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="space-y-6">
      <h1 className="font-bold text-2xl">Add New Note</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-field"
          type="text"
          placeholder="Note Title ......"
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="text-field"
          type="text"
          placeholder="Note Description ......."
        />
        <button className="btn btn--primary w-full font-bold" type="submit">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
