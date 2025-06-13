import React, { useState, useEffect } from 'react';
import StickyNoteList from './components/StickyNoteList';
import NoteForm from './components/NoteForm';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedNotes = localStorage.getItem('stickyNotes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('stickyNotes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 bg-appPink">
      <div className="bg-white p-6 rounded-2xl mb-8 grid md:grid-cols-2 gap-6 shadow-lg">
        <NoteForm addNote={addNote} />
        <div>
          <h2 className="text-xl font-bold mb-2 font-comic">Search Notes</h2>
          <input
            type="text"
            placeholder="Search by title or description"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-md bg-white text-noteText font-sevillana"
          />
        </div>
      </div>
      <StickyNoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    </div>
  );
}

export default App;
