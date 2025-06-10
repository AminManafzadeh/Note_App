import { useNotes } from "../context/NotesContext";

function Header({ sortBy, onSort }) {
  const notes = useNotes();
  const allNotes = notes?.length;
  return (
    <div className="flex items-center justify-evenly mb-12 border-b -border-b--text-400 py-4">
      <h1 className="font-bold text-2xl">My Notes ({allNotes})</h1>

      <select
        value={sortBy}
        onChange={onSort}
        className="py-2 px-4 outline-none border border-solid -border--text-400 rounded-xl font-bold -text--text-700"
      >
        <option value="latest">Sort based on latest notes</option>
        <option value="earliest">Sort based on earliest notes</option>
        <option value="completed">Sort based on completed notes</option>
      </select>
    </div>
  );
}

export default Header;
