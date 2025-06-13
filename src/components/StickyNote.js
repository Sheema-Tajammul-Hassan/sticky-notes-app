import React, { useState } from 'react';

function StickyNote({ note, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleSave = () => {
    editNote({ ...note, title: editedTitle, content: editedContent });
    setIsEditing(false);
  };

  return (
    <div className="bg-[#998100] rounded-xl shadow-md p-4 text-black">
      {isEditing ? (
        <div>
          <input
            className="w-full p-2 mb-2 rounded-md bg-white"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="w-full p-2 mb-2 rounded-md bg-white"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            rows={4}
          />
          <button
            onClick={handleSave}
            className="bg-[#c23a00] text-white font-bold py-1 px-3 rounded-md mr-2"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <h3 className="font-bold text-lg">{note.title}</h3>
          <p className="mb-4">{note.content}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-[#c23a00] text-white font-bold py-1 px-3 rounded-md mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => deleteNote(note.id)}
            className="bg-[#c23a00] text-white font-bold py-1 px-3 rounded-md"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default StickyNote;



