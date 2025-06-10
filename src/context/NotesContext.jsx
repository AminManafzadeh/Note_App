import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

function noteReducer(state, { type, payload }) {
  switch (type) {
    case "addNotes": {
      return [...state, payload];
    }
    case "deleteNote": {
      return [...state].filter((note) => note.id !== payload);
    }
    case "completedNote": {
      return [...state].map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }

    default:
      return state;
  }
}

function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(noteReducer, []);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export default NotesProvider;

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
