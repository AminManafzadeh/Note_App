function NoteStatus({ notes }) {
  const allNotes = notes?.length;
  const completedNotes = notes?.filter((note) => note.completed).length;
  const openNotes = allNotes - completedNotes;

  if (!allNotes)
    return (
      <h1 className="text-2xl font-bold uppercase">
        no notes has been added yet!!
      </h1>
    );

  return (
    <div>
      <ul className="flex justify-between -text--text-400 mb-8">
        <li className="flex items-center">
          All
          <span className="rounded-full ml-1  -bg--text-400 py-1 w-4 h-4 flex items-center justify-center -text--text-100">
            {allNotes}
          </span>
        </li>
        <li className="flex items-center">
          Completed
          <span className="rounded-full ml-1  -bg--text-400 py-1 w-4 h-4 flex items-center justify-center -text--text-100">
            {completedNotes}
          </span>
        </li>
        <li className="flex items-center">
          open
          <span className="rounded-full ml-1  -bg--text-400 py-1 w-4 h-4 flex items-center justify-center -text--text-100">
            {openNotes}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default NoteStatus;
