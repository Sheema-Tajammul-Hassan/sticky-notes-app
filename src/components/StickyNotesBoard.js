import React, { useState } from "react";
import StickyNote from "./StickyNote";

function StickyNotesBoard() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      text: "",
      x: 100,
      y: 100,
    };
    setNotes([...notes, newNote]);
  };

  const updateNote = (id, updatedText) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, text: updatedText } : note
    ));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-yellow-100 p-4 relative">
      <button
        onClick={addNote}
        className="mb-4 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
      >
        Add Note
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {notes.map(note => (
          <StickyNote
            key={note.id}
            note={note}
            updateNote={updateNote}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default StickyNotesBoard;
