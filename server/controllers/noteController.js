const Note = require('../models/Note'); // Import Note model

// Add a new note
const addNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json({ message: 'Note added successfully', note: newNote });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add note', error: error.message });
    }
};

// Get all notes
const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve notes', error: error.message });
    }
};

// Delete a note by ID
const deleteNote = async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete note', error: error.message });
    }
};

module.exports = { addNote, getNotes, deleteNote };
