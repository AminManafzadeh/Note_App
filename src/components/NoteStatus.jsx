function NoteStatus() {
  return (
    <div>
      <ul className="flex justify-between -text--text-400 mb-8">
        <li className="flex items-center">
          All
          <span className="rounded-full ml-1  -bg--text-400 py-1 w-4 h-4 flex items-center justify-center -text--text-100">
            2
          </span>
        </li>
        <li className="flex items-center">
          Completed
          <span className="rounded-full ml-1  -bg--text-400 py-1 w-4 h-4 flex items-center justify-center -text--text-100">
            2
          </span>
        </li>
        <li className="flex items-center">
          open
          <span className="rounded-full ml-1  -bg--text-400 py-1 w-4 h-4 flex items-center justify-center -text--text-100">
            2
          </span>
        </li>
      </ul>
    </div>
  );
}

export default NoteStatus;
