import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' && content.trim() === '') return;
    addNote({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2 font-comic">Add New Note</h2>
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-4 rounded bg-white text-noteText font-comic"
      />
      <textarea
        placeholder="Note Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-3 mb-4 rounded bg-white text-noteText font-sevillana"
        rows={4}
      />
      <button
        onClick={handleSubmit}
        className="bg-addButton text-white font-bold px-6 py-2 rounded"
      >
        Add Note
      </button>
    </div>
  );
}

export default NoteForm;
