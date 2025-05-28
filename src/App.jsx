import "./App.css";
import AddNewNote from "./components/AddNewNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleDelete = (id) => {
    const filteredNotes = notes?.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const handleCompleted = (e) => {
    const noteId = Number(e.target.value);
    const completedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, completed: !note.completed } : note
    );
    setNotes(completedNotes);
  };

  return (
    <div className="container max-w-[1080px] mx-auto text-center p-4">
      <Header
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="flex justify-between gap-8">
        <div className="w-[30%]">
          <AddNewNote onAddNote={handleAddNote} />
        </div>
        <div className="w-[60%]">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDeleteNote={handleDelete}
            onCompleted={handleCompleted}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
