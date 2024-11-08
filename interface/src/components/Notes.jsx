import React, { useState, useEffect } from 'react';
import Chatbot from './Chatbot'; // Import the Chatbot component

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Load notes from local storage on mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Add or update a note
  const handleSaveNote = () => {
    if (noteText.trim() === '') return;

    if (editIndex !== null) {
      const updatedNotes = notes.map((note, index) =>
        index === editIndex ? noteText : note
      );
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      setNotes([...notes, noteText]);
    }
    setNoteText('');
  };

  // Delete a note
  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Edit a note
  const handleEditNote = (index) => {
    setNoteText(notes[index]);
    setEditIndex(index);
  };

  return (
    <div className="notes-page">
      
      <div className="input-container">
        <input
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Type your note here"
        />
        <button onClick={handleSaveNote}>
          {editIndex !== null ? 'Update Note' : 'Add Note'}
        </button>
      </div>
      
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <span>{note}</span>
            <button onClick={() => handleEditNote(index)}>Edit</button>
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Chatbot component */}
      <Chatbot notes={notes} /> {/* Pass notes as a prop if the chatbot needs access to them */}
    </div>
  );
};

export default Notes;
