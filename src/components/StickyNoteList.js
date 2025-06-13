import React from 'react';

function StickyNoteList({ notes, deleteNote, editNote }) {
  const handleEdit = (id, field, value) => {
    const updatedNote = notes.find((n) => n.id === id);
    if (updatedNote) {
      editNote({ ...updatedNote, [field]: value });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {notes.map((note) => (
        <div
          key={note.id}
          className="bg-noteYellow p-4 rounded-xl shadow-lg relative"
        >
          <input
            type="text"
            value={note.title}
            onChange={(e) => handleEdit(note.id, 'title', e.target.value)}
            className="w-full bg-white text-noteText font-comic text-lg rounded px-2 py-1 mb-2 focus:outline-none"
          />
          <textarea
            value={note.content}
            onChange={(e) => handleEdit(note.id, 'content', e.target.value)}
            className="w-full bg-white text-noteText font-sevillana px-2 py-1 rounded focus:outline-none"
            rows={3}
          />
          <button
            onClick={() => deleteNote(note.id)}
            className="absolute top-2 right-3 text-red-600 font-bold text-xl"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
}

export default StickyNoteList;

