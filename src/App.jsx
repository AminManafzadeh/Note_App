import "./App.css";
import AddNewNote from "./components/AddNewNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div className="container max-w-[1080px] mx-auto text-center p-4">
      <Header />
      <div className="flex justify-between gap-8">
        <div className="w-[30%]">
          <AddNewNote onAddNote={handleAddNote} />
        </div>
        <div className="w-[60%]">
          <NoteStatus />
          <NoteList notes={notes} />
        </div>
      </div>
    </div>
  );
}

export default App;
