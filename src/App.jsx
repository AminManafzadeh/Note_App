import "./App.css";
import AddNewNote from "./components/AddNewNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";

function App() {
  return (
    <div className="container max-w-[1080px] mx-auto text-center">
      <Header />
      <div className="flex justify-between gap-8">
        <div className="w-[30%]">
          <AddNewNote />
        </div>
        <div className="w-[60%]">
          <NoteStatus />
          <NoteList />
        </div>
      </div>
    </div>
  );
}

export default App;
