// routes/noteRoutes.js
const express = require('express');
const Note = require('../models/Note');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware for authentication
const router = express.Router();

// Create a new note
router.post('/add', authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id;

    const newNote = new Note({
      title,
      content,
      user: userId,
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: 'Error creating note', error });
  }
});

// Get all notes for the logged-in user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving notes', error });
  }
});

// Update a note by ID
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;
    const noteId = req.params.id;

    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { title, content },
      { new: true, runValidators: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: 'Error updating note', error });
  }
});

// Delete a note by ID
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const noteId = req.params.id;

    const deletedNote = await Note.findByIdAndDelete(noteId);

    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting note', error });
  }
});

module.exports = router;
