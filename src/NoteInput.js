import React, { useState } from "react";

function NoteInput({ onAddNote }) {
  const [note, setNote] = useState("");

  const handleAdd = () => {
    if (note.trim()) {
      onAddNote(note);
      setNote("");
    }
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="border rounded p-2 flex-1"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}

export default NoteInput;
