import "./App.css";
import AddNewNote from "./components/AddNewNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import { useState } from "react";
import NotesProvider from "./context/NotesContext";

function App() {
  const [sortBy, setSortBy] = useState("latest");

  return (
    <div className="container max-w-[1080px] mx-auto text-center p-4">
      <NotesProvider>
        <Header sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="flex justify-between gap-8">
          <div className="w-[30%]">
            <AddNewNote />
          </div>
          <div className="w-[60%]">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </NotesProvider>
    </div>
  );
}

export default App;
